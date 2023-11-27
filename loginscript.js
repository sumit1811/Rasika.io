// Get the form elements
var form = document.getElementById("login-form");
var username = document.getElementById("username");
var password = document.getElementById("password");
var usernameError = document.getElementById("username-error");
var passwordError = document.getElementById("password-error");

// Define the validation rules
var usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Username must be 3 to 20 characters long and can contain letters, numbers, and underscores
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/; // Password must be at least 8 characters long and must contain at least one lowercase letter, one uppercase letter, one digit, and one special character

// Define the validation function
function validateForm() {
    // Reset the error messages
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    // Get the input values
    var usernameValue = username.value.trim();
    var passwordValue = password.value.trim();

    // Validate the username
    if (usernameValue == "") {
        // Username is empty
        // usernameError.innerHTML = "Please enter your username.";
        alert("Please enter your username.");
        return false;
    } else if (!usernameRegex.test(usernameValue)) {
        // Username does not match the regex
        // usernameError.innerHTML = "Please enter a valid username.";
        alert("Please enter a valid username.");
        return false;
    }

    // Validate the password
    if (passwordValue == "") {
        // Password is empty
        // passwordError.innerHTML = "Please enter your password.";
        alert("Please enter your password.")
        return false;
    } else if (!passwordRegex.test(passwordValue)) {
        // Password does not match the regex
        // passwordError.innerHTML = "Please enter a strong password.";
        alert("Please enter a strong password.");
        return false;
    }

    // If all checks pass, return true
    return true;
}

// Set the form submission event
form.onsubmit = function () {
    if (validateForm()) {
        window.location.href = 'index.html';
    }
    return false; // Prevent the default form submission
};
