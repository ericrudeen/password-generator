// Assignment Code
  // targets the #generate
var generateBtn = document.querySelector("#generate");
  // character arrays  
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericArray = ["1","2","3","4","5","6","7","8","9","0"];
var specialArray = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
    // password length from input 
var passLength;
    // arrays included from input
var selectLower;
var selectUpper;
var selectNumber;
var selectSpecial;


  // generatePassword function
function generatePassword(){
    // password length determined from alert input
    passLength = window.prompt("Choose your password length (must be between 8 and 128 characters");
    // converts alert input into a number
    var length = Number(passLength);
    // alerts user if no value is submitted on first prompt
    if (!passLength) {
    alert("Value is required");
    }
    // if pass length if answered, the min and max lengths are determined
    else if (length >= 8 && length <= 128) {
        // string of questions/criteria are submitted
    selectLower = window.confirm("Include lowercase letters?");
    selectUpper = window.confirm("Include uppercase letters?");
    selectNumber = window.confirm("Include numbers?");
    selectSpecial = window.confirm("Include special chars?");
    }

    // if prior questions are selected "yes", than add the associated array into the selections string
    var selections = []
    if (selectLower) {
    selections = selections.concat(lowerCaseArray);
    }
    if (selectUpper) {
    selections = selections.concat(upperCaseArray);
    }
    if (selectNumber) {
    selections = selections.concat(numericArray);
    }
    if (selectSpecial) {
    selections = selections.concat(specialArray);
    }

    // new variable for an array containing a loop that selects a value from selections array in each instance so as long as i <= length
    var madePassword = []
    for (var i = 0; i < length; i++) {
    madePassword.push(selections[Math.floor(Math.random() * selections.length)]);
    }

    // displays the made password and combined the array values selected in the prior loop
    return madePassword.join('');
}

// Write password input to the #password 
function writePassword() {  
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;

}

// on click, writePassword is triggered
generateBtn.addEventListener("click", writePassword);
