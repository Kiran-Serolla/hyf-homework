var firstWords = [
  "Creative ",
  "Code ",
  "Amazing ",
  "Big ",
  "Mind ",
  "Start ",
  "Crazy ",
  "Hot ",
  "Duo ",
  "Enter ",
];
var secondWords = [
  "ideas",
  "Challengers",
  "Business",
  "Brains",
  "Square",
  "paper",
  "Coders",
  " Developers",
  "Centre",
  "game",
];

const randomNumber = Math.floor(Math.random() * 10) + 0;

const startupName = firstWords[randomNumber] + secondWords[randomNumber];

const len = startupName.length;

console.log("The Startup: " + startupName + " contains " + len + " characters");
