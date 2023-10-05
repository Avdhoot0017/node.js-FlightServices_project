const express = require('express');

const router = express.Router();

const Airplaneroutes = require('./airplane-routes');
const flightRoutes = require('./flight-routes');
const cityRoutes = require('./city-routes');
const { infoController } = require('../../controllers');
const airportRoutes  = require('./airportRoute');


router.use('/airplanes' ,Airplaneroutes);

router.use('/cities' ,cityRoutes);

router.use('/airports' , airportRoutes);

router.use('/flights' ,flightRoutes); 



router.get('/info' , infoController.info);

module.exports = router;