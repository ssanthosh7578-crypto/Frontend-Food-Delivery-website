// JavaScript validation functions
function emailvalidation() {
    const emailInput = document.getElementById("emailtext");
    const mailError = document.getElementById("mail-error");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput.value)) {
        mailError.textContent = "";
    } else {
        mailError.textContent = "Invalid email address";
    }
}

function passwordvalidation() {
    const passwordInput = document.getElementById("psw");
    const passwordError = document.getElementById("password-error");

    if (passwordInput.value.length >= 8) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Password must be at least 8 characters long";
    }
}

function repeatpswvalidation() {
    const passwordInput = document.getElementById("psw");
    const repeatPasswordInput = document.getElementById("repeat-password");
    const repeatPasswordError = document.getElementById("repeatpassword-error");

    if (repeatPasswordInput.value === passwordInput.value) {
        repeatPasswordError.textContent = "";
    } else {
        repeatPasswordError.textContent = "Passwords do not match";
    }
}

function validateform() {
    const emailInput = document.getElementById("emailtext");
    const passwordInput = document.getElementById("psw");
    const repeatPasswordInput = document.getElementById("repeat-password");

    if (emailInput.value === "" || passwordInput.value === "" || repeatPasswordInput.value === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (document.getElementById("mail-error").textContent !== "" || 
        document.getElementById("password-error").textContent !== "" || 
        document.getElementById("repeatpassword-error").textContent !== "") {
        alert("Please fix the errors in the form.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


