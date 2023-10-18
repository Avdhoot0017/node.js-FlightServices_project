const express  = require('express');

const router = express.Router();
const { flightcontroller } = require('../../controllers');
const { flightmiddleware }= require('../../middlewares');






router.post('/', flightmiddleware.validateCreateRequest, flightcontroller.createFlight);

router.get('/' , flightcontroller.getAllFlights);

router.get('/:id' , flightcontroller.getFlight);



router.patch('/:id/seats',flightmiddleware.validateupdateseats,flightcontroller.updateSeats);




module.exports = router;


