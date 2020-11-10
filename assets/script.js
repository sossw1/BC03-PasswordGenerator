// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

}

/*  FUNCTION PLAN

    password length:
    1.  prompt user for password length between 8 and 128 (switch)
    2.  validate:
            input type === number
            min 8, max 128

    character types:
    1.  prompt user for each character type (switch)
        1.  prompt user if include "x" type
        2.  validate
    2.  Check if user selected at least one type (char types: lower, upper, numeric, special)

    generate:
    1.  Set up character object where keys are char types and values are string containing all chars in order
    2.  Check which char types (keys) will be used in password generation
    3.  Loop through each character of the password length
        1.  "Roll" char type (key)
        2.  "Roll" which character index of that key to use
        3.  Add it to the end of the password
    
    return the password
    
*/