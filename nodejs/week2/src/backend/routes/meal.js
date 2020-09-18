const { request, response } = require("express");
const express = require("express");
const { number } = require("yargs");
const router = express.Router();
const meals = require("../data/meals.json");

// params.. meal with specific id
router.get("/meal/:id", (request,response)=> {
    const mealId = request.params.id;
    meals.forEach((meal) => {
		if (meal.id === parseInt(mealId)) {
			response.send(meal);
        }
    });
});

module.exports = router;