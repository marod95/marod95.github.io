


function showProductsList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let products = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">                    
                        <h4>`+ products.name +`</h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` + products.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}

//fetch(CATEGORIES_URL)
//.then(res => res.json())
//.then(data =>{
//    let NData = localStorage.getItem("catID")
//    let htmlTitleProducts =
//    <h2>'+data[0]</h2>;
//    <p class="lead">'+ data[0]</p>
//document.getElementById
//})
    

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data.products
            showProductsList(currentCategoriesArray)
            sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
        
    });
})

document.getElementById("Login").innerHTML = localStorage.getItem('user');

