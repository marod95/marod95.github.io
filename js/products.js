//Codigo filtros
const URL = PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE;
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_ASC_BY_PRICE = "$<";
const ORDER_DESC_BY_PRICE = "$>";
const ORDER_BY_PROD_COUNT = "";
let FiltroArray = [];
let min = 0;
let max = 0;

function comparacion(a, b) {
  return a.name.localeCompare(b.name);
}

function sortAndShowCategories(criterio, array) {
  if (criterio === ORDER_ASC_BY_NAME) {
    FiltroArray = array.sort(comparacion);
  }
  if (criterio === ORDER_DESC_BY_NAME) {
    FiltroArray = array.reverse(comparacion);
  }
  if (criterio === ORDER_ASC_BY_PRICE) {
    FiltroArray = array.sort((a, b) => {
      return a.cost - b.cost;
    });
  }
  if (criterio === ORDER_DESC_BY_PRICE) {
    FiltroArray = array.sort((a, b) => {
      return b.cost - a.cost;
    });
  }

  document.getElementById("cat-list-container").innerHTML = "";
  showProductsList(FiltroArray);
}
document.addEventListener("DOMContentLoaded", function (e) {
  fetch(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE)
    .then((res) => res.json())
    .then((data) => {
      FiltroArray = data.products;
      showinfo(FiltroArray);
    });

  document
    .getElementById("sortPriceAsc")
    .addEventListener("click", function () {
      sortAndShowCategories(ORDER_ASC_BY_PRICE, FiltroArray);
    });
  document
    .getElementById("sortPriceDesc")
    .addEventListener("click", function () {
      sortAndShowCategories(ORDER_DESC_BY_PRICE, FiltroArray);
    });
  document
    .getElementById("rangeFilterCount")
    .addEventListener("click", function () {
      min = document.getElementById("rangeFilterCountMin").value;
      max = document.getElementById("rangeFilterCountMax").value;
      document.getElementById("cat-list-container").innerHTML = "";
      showinfo(FiltroArray);
    });
  document.getElementById("sortByCount").addEventListener("click", function () {
    sortAndShowCategories(ORDER_BY_PROD_COUNT);
  });
});

function setProduct(id){
  localStorage.setItem("ProdID", id);
  window.location.href = "product-info.html";
}

function showinfo(array) {
  array.forEach((element) => {
    if (
      (min == 0 || parseInt(element.cost) >= min) &&
      (max == 0 || parseInt(element.cost) <= max)
    ) {
      var elementHTML = `
            
      <div onclick="setProduct(`+element.id+`)" class="list-group" id="cat-list-container">
      <div class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-3">
          <img src="` + element.image + `" alt="product image" class="img-thumbnail">
          </div>
          <div class="col">
            <div class="d-flex w-100 justify-content-between">
              <div class="mb-1">
                <h4>${element.name}; ${element.cost}</h4>
                <p> ` + element.description + `</p>
              </div>
              <small class="text"> ` +
              element.soldCount +
              `</small>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      document.getElementById("cat-list-container").innerHTML += elementHTML;
    }
  });
}
//codigo filtros//

 function showProductsList(array) {
  let htmlContentToAppend = "";

  for (let i = 0; i < array.length; i++) {
    let products = array[i];
    htmlContentToAppend +=
      `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` +
      products.image +
      `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">                    
                        <h4>` +
      products.name +
      `</h4> 
                        <p> ` +
      products.description +
      `</p> 
                        </div>
                        <small class="text-muted">` +
      products.soldCount +
      ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `;
    document.getElementById("cat-list-container").innerHTML =
      htmlContentToAppend;
  }
} 

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(
    function (resultObj) {
      if (resultObj.status === "ok") {
        currentCategoriesArray = resultObj.data.products;
        showinfo(Array);
         showProductsList(array); 
         sortAndShowCategories(criterio, array);
      }
    }
  );
});

document.getElementById("Login").innerHTML = localStorage.getItem("user");
