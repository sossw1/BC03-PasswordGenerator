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



//
function getPassLength(){
  // Loop until user enters a valid password length
  while(true){
    // Prompt for input.
    let input = prompt("Please enter a number between 8 and 128 for password length.");
    // Restart if user did not input anything
    if(input === ""){
      alert("Error: No input")
      continue;
    }
    // Validate each char of input string is a number.
    let validCharCount = 0;
    for(let i=0; i<input.length; i++){
      // Parse i-th character to an integer.
      let parsedChar = parseInt(input[i]);
      // Test for NaN (not a number) characters.
      if(!(Number.isNaN(parsedChar))){
        validCharCount++;
        if(validCharCount === input.length){
          // If parsed input is between 8 and 128, password length is valid.
          var parsedInput = parseInt(input);
          if((parsedInput >= 8)&&(parsedInput <= 128)){
            return parsedInput;
          }
          // If value not between 8 and 128, start over.
          else{
            alert("Error: Not in range");
          }
        }
      }
      // If any character was NaN, start over.
      else{
        alert("Error: Not a number");
        break;
      }
    }
  } 
}

function getChars(){
  // Placeholder string
  let charTypeSelection = "";
  // Object holds possible characters by type
  let chars = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"
  }
  // Array containing object keys
  let keys = Object.keys(chars);
  // Loop until user selects at least one character type
  while(true){
    // Placeholder array
    let choices = [];
    // Prompt user for each option
    keys.forEach(element => {
      let include = confirm(`Would you like to include ${element} characters in your password?\n ('OK' = Yes, 'Cancel' = No)`);
      if(include){
        // Add confirmed keys to placeholder array
        choices.push(element);
      }
    });
    // Append key-values to placeholder string
    choices.forEach(element => {
      charTypeSelection = charTypeSelection + chars[element];
    });
    // If string is non-empty, return it
    if(charTypeSelection.length !== 0){return charTypeSelection;}
  }
}

function generatePassword(){
  // Placeholder password (empty)
  let pass = "";
  // Get the user's desired password length
  let passwordLength = getPassLength();
  // Get the user's desired character types and number of possibilities
  let possibleChars = getChars();
  let numPossibleChars = possibleChars.length;
  // Loop through each character in the password
  for(let i=0; i<passwordLength; i++){
    // Generate a random index between 0 and number of possible characters
    let rand = Math.floor(Math.random()*numPossibleChars);
    let randomChar = possibleChars.charAt(rand);
    pass = pass + randomChar;
  }
  return pass;
}

