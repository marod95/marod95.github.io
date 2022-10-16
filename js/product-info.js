const URL = PRODUCT_INFO_URL + localStorage.getItem("ProdID") + EXT_TYPE;
const URLCOMENT =
  PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("ProdID") + EXT_TYPE;
let producto = {};
let producto_info_comments = {};

function showcoments(coments) {
  var today = new Date();
  var fecha = today.toLocaleString();
  coments.forEach((element) => {
    texto = `<div class= "list-group-item list-group-item-action">
                <div class="row">
                <p><strong>${element.user}</strong></p>
                <p>${element.description}</p>
                <p>${starScore(element.score)}</p>
                <p>${element.dateTime}</p>

                </div>
                </div>
             </div>`;
    document.getElementById("Comentarios").innerHTML += texto;
  });
}
function starScore(stars) {
  let htmlStars = " ";
  for (let i = 0; i < stars; i++) {
    htmlStars += `<span  class="fa fa-star checked"></span>
        `;
  }
  for (let i = stars; i < 5; i++) {
    htmlStars += `<span  class="fa fa-star"></span>
        `;
  }
  return htmlStars;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(URL)
    .then((Response) => Response.json())
    .then((data) => {
      producto = data;

      var prodinfo = `
        <div class="row-5">
        <h3><strong>${producto.name}</strong></h3>
        <p><strong> Descripción: </strong> ${producto.description}</p>
        <p><strong> Precio: </strong> ${producto.cost}</p>
        <p><strong> Categoría: </strong>${producto.category}</p>
        <p><strong> Cantidad vendidos: </strong>${producto.soldCount}</p>
        </div>
        `;
      document.getElementById("productoID").innerHTML = prodinfo;

      let imagesToAppend = "";
      for (let i = 0; i < producto.images.length; i++) {
        imagesToAppend += `<div class="col">
             <img class="img-thumbnail" src="${producto.images[i]}">  
             </div> 
              `;
      }
      document.getElementById("Imagen").innerHTML += imagesToAppend;

      fetch(URLCOMENT)
      .then((resp) => resp.json())
      .then((dato) => {
        coments = dato;
        showcoments(coments);
      });

      //Productos relacionados//
      document.getElementById("prodRel").innerHTML += `
<h3>Productos relacionados</h3>`;
      for (prodRel of producto.relatedProducts) {
        document.getElementById("prodRel").innerHTML += `
  <div class="col-4">
  <img onclick="setProduct(${prodRel.id})"class="card-img-top" src="${prodRel.image}" alt="Card imgage";
  <h5 class="ms-1">${prodRel.name}
  </h5>
  </div>
  `;
      }
    });

  
});

// Productos Relacionados //
function setProduct(id) {
  localStorage.setItem("ProdID", id);
  window.location.href = "product-info.html";
}
