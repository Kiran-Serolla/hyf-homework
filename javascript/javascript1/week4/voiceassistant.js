let toDoList = [];

function getToday() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let marr = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  console.log(day + " of " + marr[month] + " " + year);
}

function myFunction() {
  console.log("Timer Done");
}

function getReply(command) {
  if (command == "Hello my name is Benjamin") {
    console.log("nice to meet you Benjamin");
  } else if (command == "Add fishing to my todo") {
    toDoList.push("fishing");
  } else if (command == "Add singing in the shower to my todo") {
    toDoList.push("singing in the shower");
  } else if (command == "Remove fishing from my todo") {
    console.log("removed fishing from todo");
  } else if (command == "What is on my todo?") {
    console.log("you have " + toDoList.length + " todos - " + toDoList);
  } else if (command == "What day is it today?") {
    getToday();
  } else if (command == "Set a timer for 4 minutes") {
    console.log("Timer set for 4 minutes");
    setTimeout(myFunction, 4000);
  }
}
getReply("Hello my name is Benjamin");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("What is on my todo?");
getReply("Remove fishing from my todo");
getReply("What day is it today?");
getReply("Set a timer for 4 minutes");
console.log(toDoList);
