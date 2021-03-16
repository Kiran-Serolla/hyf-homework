const express = require("express");
const { request, response } = require("../app");
const router = express.Router();
const reviews = require("../data/reviews.json");

router.get("/reviews",(request,response)=> {
    
    response.json(reviews);
});
// params.. review with specific id
router.get("/reviews/:id", (request,response)=> {
    const reviewId = request.params.id;
    reviews.forEach((review)=> {
        if (review.id = parseInt(reviewId)){
            response.send(review)
        }
    })
})
module.exports = router;