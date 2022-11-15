document.addEventListener("DOMContentLoaded", function(){

   if(localStorage.getItem("user") != undefined){
       document.getElementById("Login").innerHTML = localStorage.getItem("user");
   } else{
       window.location = "login.html"
   };

   
   
 })


 

function saveDataProfile(){
  
  const Name1 = document.getElementById("name1").value
  const Name2 = document.getElementById("name2").value
  const LastName1 = document.getElementById("lastName1").value
  const LastName2 = document.getElementById("lastName2").value
  const Email = localStorage.getItem("user")
  const Telefono = document.getElementById("numero").value
  const UserData = [Name1, Name2, LastName1, LastName2, Email, Telefono]
  localStorage.setItem("ProfileData", JSON.stringify(UserData));
}

function showData(){
  const dataProfile = localStorage.getItem("ProfileData")
  let userInfo;
  if(dataProfile){
    userInfo = JSON.parse(dataProfile);
  }

  if(userInfo){
    document.getElementById("name1").value = userInfo[0]
    document.getElementById("name2").value = userInfo[1]
    document.getElementById("lastName1").value = userInfo[2]
    document.getElementById("lastName2").value = userInfo[3]
    document.getElementById("e-mail").value = userInfo[4]
    document.getElementById("numero").value = userInfo[5]

  }
}
showData()






function SaveProfile(){
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