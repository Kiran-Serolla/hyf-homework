const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} hours ${minutes} minutes`;
}

let travelTime = calculateTime(travelInformation);
console.log(travelTime);
