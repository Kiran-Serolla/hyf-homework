const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
let mealReviews = []; // empty array to push reviews

meals.forEach((meal) => {
  reviews.forEach((review) => {
    if (meal.id == review.mealId) {
      mealReviews.push(review);
    }
    if (mealReviews.length == 0) {
      // if there are no reviews for a meal
      meal["reviews"] = ["NO reviews"];
    } else {
      meal["reviews"] = mealReviews;
    }
  });
});

module.exports = meals;
