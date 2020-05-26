function getEventWeekday(eventDay) {
  const Weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let today = d.getDay();
  let x = (today + eventDay) % 7;
  return Weekdays[x];
}
console.log(getEventWeekday(8));
