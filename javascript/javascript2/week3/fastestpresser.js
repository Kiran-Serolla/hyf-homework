const input = document.querySelector("input");
const button = document.querySelector("button");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let userInput;
input.addEventListener("input", () => {
  userInput = parseInt(input.value);
});

function startGame() {
  let player1Count = 0;
  document.addEventListener("keypress", (event) => {
    if (event.keyCode == 83) {
      player1Count++;
      player1.innerHTML = `${player1Count}`;
    }
  });
  let player2Count = 0;
  document.addEventListener("keydown", (event) => {
    if (event.keyCode == 76) {
      player2Count++;
      player2.innerHTML = `${player2Count}`;
    }
  });
}
button.addEventListener("click", startGame);
