const express  = require('express');

const router = express.Router();
const { cityControl } = require('../../controllers');

const {citymiddleware} = require('../../middlewares');






router.post('/', citymiddleware.validateCreateRequest , cityControl.createCity);



module.exports = router;


