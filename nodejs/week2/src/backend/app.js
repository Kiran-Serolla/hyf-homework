const express = require("express");
const app = express();

// import data here
const meals = require("./routes/meals");
const reviews = require("./routes/reviews");
const reservations = require("./routes/reservations");
const meal = require("./routes/meal")


app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
});

app.get("/meals", meals);
app.get("/reviews",reviews);
app.get("/reservations",reservations);
app.get("/meal/:id", meal);
app.get("/reservations/:id", reservations);
app.get("/reviews/:id", reviews);

module.exports = app;
