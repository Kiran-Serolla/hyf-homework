function earthLogger() {
  console.log("Earth");
}
function saturnLogger() {
  console.log("Saturn");
}

function planetLog(planet) {
  planet();
}

planetLog(earthLogger);
planetLog(saturnLogger);
