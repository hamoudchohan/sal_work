function validation(){
  var userEmail = document.querySelector("#userEmail").value;
  var userPassword = document.querySelector("#userPassword").value;

  var emailError = document.querySelector("#emailError");
  var passError = document.querySelector("#passError");

  if (userEmail == "") {
    emailError.textContent = "*Please enter email";
    return false;
  }
  if(userPassword == ""){
    passError.textContent = "*Please enter password";
    return false;
  }
}