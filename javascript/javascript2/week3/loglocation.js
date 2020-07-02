const p = document.getElementById("area");
const button = document.getElementById("log");
const getLocation = () => {
  navigator.geolocation.getCurrentPosition(showPosition);
};

const showPosition = (position) => {
  p.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
};
button.addEventListener("click", getLocation);
