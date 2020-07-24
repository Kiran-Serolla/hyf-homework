const button1 = document.getElementById("click");

const buttonClick = (delay, stringToLog) => {
  setTimeout(() => {
    console.log("called after 5 seconds");
  }, 5000);
};
button1.addEventListener("click", buttonClick);
