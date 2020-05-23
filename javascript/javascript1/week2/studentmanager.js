const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length == 6) {
    // Checking the array lenght
    console.log("Cannot add more students to class 07");
  } // checking if the element already exists in array
  else if (class07Students.includes(studentName)) {
    console.log(studentName + "already exists");
  } // if the student name is "queen", push
  else if (studentName === "Queen") {
    class07Students.push(studentName);
  } // checcking for empty string
  else if (studentName == "") {
    console.log("You cannot add an empty string");
  } else {
    class07Students.push(studentName);
  }
}

addStudentToClass("Mike");
addStudentToClass("John");
addStudentToClass("Sara");
addStudentToClass("Julie");
addStudentToClass("Andy");
addStudentToClass("David");
addStudentToClass("Queen");
console.log(class07Students);
