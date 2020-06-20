const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// finding the required item in the array

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    // removing the item
    names.splice(i, 1);
  }
}

console.log(names);
