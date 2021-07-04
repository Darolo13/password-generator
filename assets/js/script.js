// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChars = "0123456789";
var specialChars = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  var password = "";
  var allChars = "";
  // creates user prompt to select password length
  var passwordLength = prompt("How many characters will your password have? Password must be at least 8 characters and no more than 128 characters.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);