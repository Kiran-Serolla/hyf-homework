//const input = document.getElementById("inputarea");
console.log("script loaded");
const cityName = document.getElementById("cityname");
const submit = document.getElementById("submit");
const temperature = document.getElementById("temperature");
const windspeed = document.getElementById("windspeed");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const choosenCity = document.getElementById("city");
const weather = document.getElementById("weather");

const fetchWeather = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=dd220ab98fb26bdbf1fb56fcb2351ebe`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      choosenCity.innerHTML = `Selected City : ${data.name}`;
      weather.innerHTML = `Weather : ${data.weather[0].description}`;
      temperature.innerHTML = `Temperature : ${Math.round(
        data.main.temp
      )}<span>&deg;c</span>`;
      windspeed.innerHTML = `Wind Speed : ${data.wind.speed} m/s`;
      sunrise.innerHTML = `Sunrise : ${new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString()}`;
      sunset.innerHTML = `Sunset : ${new Date(
        data.sys.sunset * 1000
      ).toLocaleTimeString()}`;
    });
};

submit.addEventListener("click", fetchWeather);
