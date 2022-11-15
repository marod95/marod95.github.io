const URL = CART_INFO_URL + "25801" + EXT_TYPE;
let producto = {};
let precioUnitario = 0
let subtotal = 0
let total = 0
let costoEnvio = 0

let Ciudad = document.getElementById("ciudad")
let Calle = document.getElementById("calle")
let Numero = document.getElementById("numero")
let Telefono = document.getElementById("telefono")
let numTarjeta = document.getElementById("creditCardNumber")
let codSeguridad = document.getElementById("creditCardSecurityCode")
let vencimiento = document.getElementById("dueDate")
let numCuenta = document.getElementById("bankAccountNumber")
let formulario = document.getElementById("form");
let paymentType = document.getElementById("paymentType")


document.addEventListener("DOMContentLoaded", () => {
  fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
      producto = data;
      console.log(producto);
      showArticulo(producto);
      Subtotal();
      FormaPago();
    });
});

function showArticulo() {
  precioUnitario = producto.articles[0].unitCost;
  Lista = `
    <div class="container">
        <div class="row">
            <div class="col-2">
                <img class="img-thumbnail" src="${producto.articles[0].image}"/>
            </div>
            <div class="col-2">
                <h5>Nombre</h5>
                <p>${producto.articles[0].name}</p>
            </div>
            <div class="col-2">
            <h5>Costo</h5>
            <p>Precio Unitario ${precioUnitario}</p>
            </div>
            <div class="col-4">
            <h5>Cantidad</h5>
                <input type="number" value=1 min=1 id="cantArt" onchange="Subtotal()">
             </div>
            <div class="col-2">
            <h5>Subtotal</h5>
            <p id="subtotal"> ${precioUnitario}</p>
            </div>
        </div>
    </div>
    `;
  document.getElementById("listaCompras").innerHTML = Lista;
}

function Subtotal() {
   subtotal = precioUnitario * document.getElementById("cantArt").value
  document.getElementById("subtotal").innerHTML = subtotal
  document.getElementById("subtotalText").innerHTML = subtotal
  CostoEnvio()
  calcTotal()
}

function CostoEnvio(){
  if (document.getElementById("standard").checked){
    costoEnvio = subtotal * 0.05
    document.getElementById("shippingText").innerHTML = costoEnvio;
  } else if (document.getElementById("express").checked) {
    costoEnvio = subtotal * 0.07
    document.getElementById("shippingText").innerHTML = costoEnvio;
  } else if (document.getElementById("premium").checked){
    costoEnvio = subtotal * 0.15
    document.getElementById("shippingText").innerHTML = costoEnvio;
  }
  calcTotal()
}

function calcTotal(){
  document.getElementById("totalCostText").innerHTML = subtotal + costoEnvio
}

function FormaPago(){
document.getElementById("creditCardPaymentRadio").addEventListener("change", function(){
  document.getElementById("creditCardNumber").disabled = false;
  document.getElementById("creditCardSecurityCode").disabled = false;
  document.getElementById("dueDate").disabled = false;
  document.getElementById("bankAccountNumber").disabled = true;

  document.getElementById("paymentType").innerHTML = "Tarjeta de credito"
})

document.getElementById("bankingRadio").addEventListener("change", function(){
  document.getElementById("creditCardNumber").disabled = true;
  document.getElementById("creditCardSecurityCode").disabled = true;
  document.getElementById("dueDate").disabled = true;
  document.getElementById("bankAccountNumber").disabled = false;

  document.getElementById("paymentType").innerHTML = "Transferencia bancaria"

})
}




function realizarCompra(){
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        showAlertError()
      }else {
        showAlertSuccess()
      }
      form.classList.add('was-validated')
    }, false)
})
}



function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
  setTimeout(() => document.getElementById("alert-success").classList.remove("show"),1500)
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
  setTimeout(() => document.getElementById("alert-danger").classList.remove("show"),1500)
}