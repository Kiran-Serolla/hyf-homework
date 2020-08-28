const meal = require("../data/meals.json");
//const meals = require("./meals");

let largeMeals = meal.filter((element) => {
  return element.max_reservations > 50;
});
//console.log(largeMeal);
module.exports = largeMeals;
