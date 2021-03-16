const express = require("express");
const app = express();
const meals = require("./routes/meals.js");
const cheapMeals = require("./routes/cheap-meals.js");
const largeMeals = require("./routes/large-meals.js");
const randomMeal = require("./routes/randommeal.js");
const reservations = require("./routes/reservations.js");
const randomReservation = require("./routes/reservation.js");

app.get("/", (request, response) => {
  response.send(`Page not found`);
});

app.get("/meals", (request, response) => {
  response.send(meals);
});

app.get("/cheapMeals", (request, response) => {
  response.send(cheapMeals);
});

app.get("/largeMeals", (request, response) => {
  response.send(largeMeals);
});

app.get("/randomMeal", (request, response) => {
  response.send(randomMeal);
});

app.get("/reservations", (request, response) => {
  response.send(reservations);
});

app.get("/randomReservation", (request, response) => {
  response.send(randomReservation);
});
const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

module.exports = server;
