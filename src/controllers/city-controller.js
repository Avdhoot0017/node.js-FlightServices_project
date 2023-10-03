const { cityservice } = require('../services');
const {successresponce , errorresponce} = require('../utils/common');
const { StatusCodes } = require('http-status-codes');



async function createCity(req, res)
 {
    try {
        const city = await cityservice.createCity({
             name: req.body.name

        })
        successresponce.data = city;


        return res.status(StatusCodes.CREATED).json(successresponce)
        
    } catch (error) {

        errorresponce.error = error;
        

        return res.status(error.statusCode).json(errorresponce);


        
        
    }
 }



 module.exports ={

    createCity
 }
