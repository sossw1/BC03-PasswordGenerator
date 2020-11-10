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
  var passLength;
  var valid = false;
  //Loop until user enters a valid password length
  while(!valid){
    //Prompt for input
    var input = prompt("Please enter a number between 8 and 128 for password length.");
    //Validate input is a number
    var numberChars = 0;
    //Loop through input string
    for(let i=0; i<input.length; i++){
      //Select the i-th character
      let char = input[i];
      //Parse the i-th character
      let parsedChar = parseInt(char);
      if(!(Number.isNaN(parsedChar))){
        numberChars++;
        //If all characters were numbers, password length is a number.
        if(numberChars === input.length){
          //If parsed input is between 8 and 128, password length is valid.
          let parsedInput = parseInt(input);
          if((parsedInput >= 8)&&(parsedInput <= 128)){
            valid = true;
            break;
          }
          else{
            alert("Error: Not in range.");
          }
        }
      }
      //If any character was not a number (NaN), prompt again.
      else{
        alert("Error: Not a number.");
        break;
      }
    }
  } 
  //Return password
  return "0";
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