///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

/*
pseudo code
prompted for the length of the password
choose a length of at least 8 characters and no more than 128 characters
confirm lowercase, uppercase, numeric, and/or special characters
make arrays for each chracter type


*/



// array of numbers
var numbers = "1234567890";
// array of lowercase //type in quotes
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
// array of special characters   //add all special characters
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//array of uppercase
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";




// create generatePassword function

function generatePassword(){
  var newpassword= "";


    // prompted for the length of the password 
    var passwordLength = prompt("What is the length of your password? (8-128 charceters)");

    // using while loop to ensure the password is within range
    
        while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
            alert ("Password length must be between 8-128 characters.")
            passwordLength = prompt("What is the length of your password? (8-128 charceters)")
        };


    // prompt for lowercase 
    var confirmlowerCase = confirm("Do you want lower case letters?");
    // prompt for uppercase 
    var confirmupperCase = confirm("Do you want upper case letters?");
    // prompt for numeric
    var confirmnumeric = confirm("Do you want numbers?");
    // prompt for special characters()
    var confirmspecial = confirm("Do you want special characters?");


    // make sure at least one chracter type is selected
    if (lowerCase === false && upperCase === false && numeric === false && special === false ){
        alert("You must select one character type.")

        return;
    }

    //  make an object for each character type, make sure each character type shows when being selected
    var PasswordOptions = { 
        lowers: (confirmlowerCase) ? lowerCase: "", 
        uppers: (confirmupperCase) ? upperCase: "",
        numerics: (confirmnumeric) ? numbers: "",
        specials: (confirmspecial) ? special: "",
    };

    console.log(PasswordOptions);


    //   make the selected chracter type as an array
    var PasswordArray = Object.values(PasswordOptions);
        console.log(PasswordArray);

    // join the array as a string, and loop through passwordLength to randomly select newpassword
    var PasswordString = PasswordArray.join("");

    for (i=0; i<passwordLength; i++){
        newpassword += PasswordString.charAt(Math.floor(Math.random() * PasswordString.length));
    };


  return newpassword;
}


///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
