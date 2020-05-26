let fullname1, fullname2;

function getFullname(firstname, surname, useFormalName) {
  if (useFormalName == true) {
    return "lord " + firstname + surname;
  } else {
    return firstname + surname;
  }
}

fullname1 = getFullname("Kiran ", "Serolla", true);
fullname2 = getFullname("Kanishk ", "Kalvala", false);
console.log(fullname1);
console.log(fullname2);
