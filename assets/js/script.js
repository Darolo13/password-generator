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

passwordLength = parseInt(passwordLength);

 // makes user input a length between 8 and 128 
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must have more than 8 and less than 128 characters!");
  return generatePassword(); 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);