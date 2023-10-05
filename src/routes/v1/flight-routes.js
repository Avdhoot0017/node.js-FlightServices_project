const express  = require('express');

const router = express.Router();
const { flightcontroller } = require('../../controllers');
const { flightmiddleware }= require('../../middlewares');






router.post('/', flightmiddleware.validateCreateRequest, flightcontroller.createFlight);




module.exports = router;


