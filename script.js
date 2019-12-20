var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numCase = "1234567890";
var symCase = "!@#$%^&*()_+-="
var password = "";


var passLength = promt("How many characters would you like to use?")
if (passLength < 8 || passLength > 128) {
    alert("Password length must be 8-128 characeters");
}

if (passLength >= 8 && passLength <= 128) {
var conLower = confirm("Would you like to have lower case letter?");
var conUpper = confirm("Would you like to have upper case letter?");
var conNumber = confirm("Would you like to have numbers?");
var conSymbol = confirm("Would you like to have special character letter?");
}

while (!(conLower || conUpper || conNumber || conSymbol)) {
    alert("You must pick at least one character");
}