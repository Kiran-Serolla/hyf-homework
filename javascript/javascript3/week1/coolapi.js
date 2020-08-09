fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
// This is an API that provides sunrise and sunset timings for a given lattitude adn longitude
// The data is an array of objects
