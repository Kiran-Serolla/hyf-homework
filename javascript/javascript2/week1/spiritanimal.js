const h2 = document.getElementById("Spirit Animal");
const input = document.getElementById("input-name");
const button = document.getElementById("submit");
const form = document.getElementById("animalform");
const spiritAnimals = ["Dragon", "Rabbit", "Elephant", "Wolf", "Lion"];

function randomNumber() {
  return Math.floor(Math.random() * spiritAnimals.length);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = input.value;
  const animal = spiritAnimals[randomNumber()];
  const output = name + " : " + animal;
  console.log(output);
});
