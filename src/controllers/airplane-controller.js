const { AirplaneService } = require('../services');
const {successresponce , errorresponce} = require('../utils/common');
const { StatusCodes } = require('http-status-codes');



 async function createAirplane(req, res)
 {
    try {
        const airplanes = await AirplaneService.createAirplane({
             modelNumber: req.body.modelNumber,
             capacity: req.body.capacity

        })
        successresponce.data = airplanes;


        return res.status(StatusCodes.CREATED).json(successresponce)
        
    } catch (error) {

        errorresponce.error = error;
        

        return res.status(error.statusCode).json(errorresponce);


        
        
    }
 }







 async function getAirplanes(req,res)
 {
    try {

        const airplanes1 = await AirplaneService.getAirplanes();
        successresponce.data = airplanes1;
        return res.status(StatusCodes.OK).json(successresponce);


        
    } catch (error) {

        
        errorresponce.error = error;
        

        return res.status(error.statusCode).json(errorresponce);
        
    }
 }





 async function getairplne(req,res)
 {
    try {

        const airplanes1 = await AirplaneService.getairplne(req.params.id);
        successresponce.data = airplanes1;
        return res.status(StatusCodes.OK).json(successresponce);


        
    } catch (error) {

        
        errorresponce.error = error;
        

        return res.status(error.statusCode).json(errorresponce);
        
    }
 }







 async function destroyairplane(req,res)
 {
    try {

        const airplanes1 = await AirplaneService.destroyairplane(req.params.id);

        successresponce.data = airplanes1;
        return res.status(StatusCodes.OK).json(successresponce);


        
    } catch (error) {

        
        errorresponce.error = error;
        

        return res.status(error.statusCode).json(errorresponce);
        
    }
 }


 async function updateAero(req,res)
 {
    try {

    


        const aero1 = await AirplaneService.updateplane(req.params.id,{data:req.body.data});
        successresponce.data = aero1;
        return res.status(StatusCodes.OK).json(successresponce);

        
    } catch (error) {


        throw error;

        
    }
 }

 module.exports = {

    createAirplane,
    getAirplanes,
    getairplne,
    destroyairplane,
    updateAero
 }