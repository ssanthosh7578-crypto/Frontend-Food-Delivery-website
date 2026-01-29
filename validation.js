
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var repeatPassword = document.getElementById("org_psw").value;

    if (email === "") {
      alert("Email must be filled out");
      return false;
    }

    if (password === "") {
      alert("Password must be filled out");
      return false;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  }