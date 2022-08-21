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
    window.location.href = "index.html";
  } else {
    showAlertError();
    window.location.href = "login.html";
  }
}
