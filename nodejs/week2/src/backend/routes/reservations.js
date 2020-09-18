const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/reservations",(request, response) => {

        response.send(reservations);
    });

// params.. reservation with specific id
router.get("/reservations/:id", (request, response) => {
        const reservationId = request.params.id;
        reservations.forEach((reservation) => {
                if (reservation.id === parseInt(reservationId)) {
                response.send([reservation]);
            } 
        });
    });

module.exports = router;