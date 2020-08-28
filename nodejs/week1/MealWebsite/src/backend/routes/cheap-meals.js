const meal = require("../data/meals.json");
const meals = require("./meals");

let cheapMeal = meals.filter((element) => {
  return element.price < 50;
});

module.exports = cheapMeal;
