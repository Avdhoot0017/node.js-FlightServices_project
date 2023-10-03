const express  = require('express');

const router = express.Router();
const { AirplaneControl } = require('../../controllers');

const { AirplaneMiddlewares } = require('../../middlewares'); 
const {citymiddleware} = require('../../middlewares');




router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneControl.createAirplane);

router.get('/' ,  AirplaneControl.getAirplanes);
router.get('/:id' ,  AirplaneControl.getairplne);
router.delete('/:id' , AirplaneControl.destroyairplane);
router.patch('/:id', AirplaneControl.updateAero);


module.exports = router;


