document.getElementById("Regresa").addEventListener("click", function () {
  window.location.href = "index.html";
});

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}
function comprobarClave() {
  Password = document.getElementById("Password").value;
  email = document.getElementById("email").value;
  check = document.getElementById("check").checked;

  if (Password.length > 0 && email.length > 0 && check == true) {
    showAlertSuccess();
    setTimeout(() => {window.location.href = "index.html"},1000);
  } else {
    showAlertError();
    setTimeout(() => {window.location.href = "login.html"},1000);
    
  }
}

document.getElementById("submit").addEventListener("click", ()=>{
  localStorage.setItem('user', document.getElementById("email").value);
  localStorage.getItem('user');
  document.getElementById("Login").innerHTML = localStorage.getItem('user');
})
