var userData = "Enter any text here".toLowerCase();
var å = 0;
var ø = 0;
var æ = 0;
var total = 0;
var count;

for (count = 0; count < userData.length; count++) {
  var char = userData.charAt(count);
  if (char.match(/[øåæ]/)) {
    total++;
    switch (char) {
      case "å":
        å++;
        break;
      case "ø":
        ø++;
        break;
      case "æ":
        æ++;
        break;
    }
  }
}
