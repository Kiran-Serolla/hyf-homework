const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  return time;
}
let travelTime = calculateTime(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
