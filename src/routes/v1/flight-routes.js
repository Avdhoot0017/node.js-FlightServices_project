const express  = require('express');

const router = express.Router();
const { flightcontroller } = require('../../controllers');
const { flightmiddleware }= require('../../middlewares');






router.post('/', flightmiddleware.validateCreateRequest, flightcontroller.createFlight);

router.get('/' , flightcontroller.getAllFlights);




module.exports = router;


