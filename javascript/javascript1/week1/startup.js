var firstWords = ["Creative ","Code ","Amazing ","Big ","Mind ","Start ","Crazy ","Hot ","Duo ","Enter "];
var secondWords = ["ideas","Challengers","Business","Brains","Square","paper","Coders"," Developers","Centre","game"];

const randomNumber = Math.floor(Math.random() * 10) + 0;
const randomNumber1 = Math.floor(Math.random() * 10) + 0;

var startupName = firstWords[randomNumber] + secondWords[randomNumber1];

var len = startupName.length;

console.log( "The Startup: " + startupName + " contains "+len+ " characters");
