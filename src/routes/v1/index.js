const express = require('express');

const router = express.Router();

const Airplaneroutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const { infoController } = require('../../controllers');

router.use('/airplanes' ,Airplaneroutes);

router.use('/cities' ,cityRoutes);


router.get('/info' , infoController.info);

module.exports = router;