let passwordButton = document.getElementById('generate-button');
let passwordDisplay = document.getElementById('password-display');
let passwordInput = document.getElementById("password-length");
let passwordKeys = "abceormdsmndsfn!#$%^9ABQEBLPFSa9(LZXCVNMFS";

function passwordLength(length) {
    let passwordInt = "";
    for (let i = 0; i < length; i++) {
        let randomChar = passwordKeys[Math.floor(Math.random() * passwordKeys.length)];
        passwordInt += randomChar;
    }
    return passwordInt;
}

passwordButton.addEventListener("click", function() {
    let length = parseInt(passwordInput.value, 10); // Get user input length
    if (isNaN(length) || length < 8 || length > 20) {
        passwordDisplay.textContent = "Please enter a number between 8 and 20.";
        return;
    }
    let generatedPassword = passwordLength(length); // Call the function
    passwordDisplay.textContent = generatedPassword; // Display the password
});
