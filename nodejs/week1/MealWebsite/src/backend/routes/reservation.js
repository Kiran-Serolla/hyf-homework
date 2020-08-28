const reservation = require("../data/reservations.json");
const randomReservation =
  reservation[Math.floor(Math.random() * reservation.length)];

module.exports = randomReservation;
