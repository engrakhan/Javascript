const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numberCheckbox = document.getElementById("number");
const symbolCheckbox = document.getElementById("symbol");
const generateButton = document.getElementById("generateButton");

// Character sets for password generation
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = lowercaseChars.toUpperCase();
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?";

function generatePassword(event) {
  event.preventDefault(); // Prevent form submission and page reload

  let characters = "";

  // Add selected character sets based on checkboxes
  if (uppercaseCheckbox.checked) characters += uppercaseChars;
  if (lowercaseCheckbox.checked) characters += lowercaseChars;
  if (numberCheckbox.checked) characters += numberChars;
  if (symbolCheckbox.checked) characters += symbolChars;

  // Validate that at least one character set is selected
  if (characters === "") {
    alert("Please select at least one character type.");
    return; // Exit the function if no characters were selected
  }

  // Generate random password based on selected characters and length
  let password = "";
  const passwordLength = parseInt(lengthInput.value); // Convert string to number
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Update the password input field
  passwordInput.value = password;
}

// Add event listener to the Generate Password button
generateButton.addEventListener("click", generatePassword);
