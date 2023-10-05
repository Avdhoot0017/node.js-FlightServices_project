const express  = require('express');

const router = express.Router();
const { airportControoler } = require('../../controllers');
const { airportmiddleware }= require('../../middlewares');






router.post('/', airportmiddleware.validateCreateRequest, airportControoler.createAirport);

router.get('/' ,  airportControoler.getAirports);
router.get('/:id' ,  airportControoler.getairport);
router.delete('/:id' , airportControoler.destroyairport);


module.exports = router;


