const URL = CART_INFO_URL + "25801" + EXT_TYPE
let producto = {}
let precioUnitario = 0

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
        producto = data;
        console.log(producto);
        showArticulo(producto);
    })
});

function showArticulo(){
    precioUnitario = producto.articles[0].unitCost
    Lista =`
    
    <img src="${producto.articles[0].image}"/>
    <p>${producto.articles[0].name}</p>
    <input type="number" value=1 min=1 id="cantArt" onchange="subtotal()">
    <p id="subtotal">${precioUnitario}</p>
    `
    document.getElementById("listaCompras").innerHTML = Lista;
}

function subtotal(){
    document.getElementById("subtotal").innerHTML = precioUnitario * document.getElementById("cantArt").value;
}