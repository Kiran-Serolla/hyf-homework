const { request, response } = require("express");
const express = require("express");
const { number } = require("yargs");
const router = express.Router();
const meals = require("../data/meals.json");

// response with json for all meals

router.get("/meals",(request,response)=> {
     console.log("all meals")
     response.send(meals);
console.log(request.query)

if (Object.keys(request.query).length !== 0)
     {
          console.log("meals > 90");
      const maximumPrice = request.query.maxPrice;
      console.log(maximumPrice)
    
     response.send(meals.filter((meal) => {
          return meal.price < parseInt(maximumPrice)
     }
         
          
     ))
}});

  
     


// query parameter - max price



// query parameter- maatch title 

router.get("/meals?title=Indian%20platter", (request,response)=> {
     //const mealTitle = request.query.title;
     //let mealMatchingTheTitle = [];
     meals.filter((meal) => meal.title.includes(`${request.query.title}`));
         response.send(meal)
})

// query parameters -- limit 
router.get("/meals?limit=4", (request,response)=> {
     meals.forEach((meal)=>{
          if(meal.max_reservations <=4){
               response.send(meal)
          }
     })
})

module.exports = router;