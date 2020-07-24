const block = document.getElementById("text-log");
function textAfterDelay() {
  setTimeout(() => {
    block.innerHTML = "called after 2.5 seconds";
  }, 2500);
}

textAfterDelay();
