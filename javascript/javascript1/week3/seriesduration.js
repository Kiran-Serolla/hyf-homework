const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
let lifeSpanInHours = 80 * 360 * 24;
let totalPercentage = 0;
function logOutSeriesText() {
  for (let i = 0; i < seriesDurations.length; i++) {
    let daysInHours = seriesDurations[i].days * 24;
    let minutesInHours = seriesDurations[i].minutes / 60;
    let hours = seriesDurations[i].hours;
    let totalTime = daysInHours + minutesInHours + hours;
    let percentageOfLife = (totalTime / lifeSpanInHours) * 100;
    console.log(
      seriesDurations[i].title + " took " + percentageOfLife + " %  of my life"
    );
    totalPercentage += percentageOfLife;
  }
  console.log("In total that is " + totalPercentage + " % of my life");
}

logOutSeriesText();
