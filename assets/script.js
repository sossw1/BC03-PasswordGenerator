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
  var passLength = getPassLength();
  alert(passLength);
}

function getPassLength(){
  let len;
  let valid = false;
  //Loop until user enters a valid password length
  while(!valid){
    //Prompt for input.
    let input = prompt("Please enter a number between 8 and 128 for password length.");
    //Validate each char of input string is a number.
    let validCharCount = 0;
    for(let i=0; i<input.length; i++){
      let char = input[i];
      //Parse i-th character to integer.
      let parsedChar = parseInt(char);
      if(!(Number.isNaN(parsedChar))){
        validCharCount++;
        //Check if all chars were valid using total.
        if(validCharCount === input.length){
          //If parsed input is between 8 and 128, password length is valid.
          let parsedInput = parseInt(input);
          if((parsedInput >= 8)&&(parsedInput <= 128)){
            valid = true;
            len = parsedInput;
            alert(len);
            break;
          }
          //If value not between 8 and 128, start over.
          else{
            alert("Error: Not in range.");
          }
        }
      }
      //If any character was not a number (NaN), start over.
      else{
        alert("Error: Not a number.");
        break;
      }
    }
  } 
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