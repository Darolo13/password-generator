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

  passwordLength = parseInt(passwordLength);

  // makes user input a length between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must have more than 8 and less than 128 characters!");
    return generatePassword();
  }

  // random function with A javascript string method that allows user to select a character within the string
  function randomChar(charString) {
    return charString[Math.floor(Math.random() * charString.length)];
  }

  // confirm lowercase characters "yes or no"
  var lowercaseOption = confirm("Would you like to include lowercase characters?");
  if (lowercaseOption) {
    password += randomChar(lowercaseChars)
    allChars += lowercaseChars;
  }

  // confirm uppercase characters "yes or no"
  var uppercaseOption = confirm("Would you like to include uppercase characters?");
  if (uppercaseOption) {
    password += randomChar(uppercaseChars)
    allChars += uppercaseChars;
  }

  // confirm numerical characters "yes or no"
  var numericalOption = confirm("Would you like to include numerical characters?");
  if (numericalOption) {
    password += randomChar(numericalChars)
    allChars += numericalChars;
  }

  // confirm special characters "yes or no"
  var specialOption = confirm("Would you like to include special characters?");
  if (specialOption) {
    password += randomChar(specialChars)
    allChars += specialChars;
  }
  
  // for loop that will add random characters to each character variable
  for (i = password.length; i < passwordLength; i++) {
    password += randomChar(allChars)
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);