const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestWord(arr) {
  let short = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < short.length) short = arr[i];
  }
  return short;
}

console.log(shortestWord(danishWords));
