document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    if(localStorage.getItem("user") != undefined){
        document.getElementById("Login").innerHTML = localStorage.getItem("user");
    } else{
        window.location = "login.html"
    }
});

    document.getElementById("Login").innerHTML = localStorage.getItem('user');

  