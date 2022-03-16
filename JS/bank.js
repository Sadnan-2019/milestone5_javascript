document.getElementById("login-submit").addEventListener("click", function () {
  // console.log("button clicked");

  const userEmailFields = document.getElementById("user-email");
  // console.log(userEmail);
  const userEmail = userEmailFields.value;
  // console.log(userEmail)
  const userPasswordField = document.getElementById("user-pass");
  // console.log(userPasswordField);
  const userPass = userPasswordField.value;
  // console.log(userPass);

  if(userEmail == "sadnan.wow@gmail.com" && userPass == "sadnan123"){

          // console.log("valid user")
          window.location.href =("Banking.html")
  }
   
});
