const { airportservice } = require('../services');
const { successresponce, errorresponce } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');



async function createAirport(req, res) {
    try {
        const airport = await airportservice.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        })
        successresponce.data = airport;
 

        return res.status(StatusCodes.CREATED).json(successresponce)

    } catch (error) {

        errorresponce.error = error;


        return res.status(error.statusCode).json(errorresponce);




    }
}







async function getAirports(req, res) {
    try {

        const airports = await airportservice.getAirports();
        successresponce.data = airports;
        return res.status(StatusCodes.OK).json(successresponce);



    } catch (error) {


        errorresponce.error = error;


        return res.status(error.statusCode).json(errorresponce);

    }
}





async function getairport(req, res) {
    try {

        const airport = await airportservice.getairport(req.params.id);
        successresponce.data = airport;
        return res.status(StatusCodes.OK).json(successresponce);



    } catch (error) {


        errorresponce.error = error;


        return res.status(error.statusCode).json(errorresponce);

    }
}







async function destroyairport(req, res) {
    try {

        const airport = await airportservice.destroyairport(req.params.id);

        successresponce.data = airport;
        return res.status(StatusCodes.OK).json(successresponce);



    } catch (error) {


        errorresponce.error = error;


        return res.status(error.statusCode).json(errorresponce);

    }
}


async function updateAero(req, res) {
    try {




        const aero1 = await AirplaneService.updateplane(req.params.id, { data: req.body.data });
        successresponce.data = aero1;
        return res.status(StatusCodes.OK).json(successresponce);


    } catch (error) {


        throw error;


    }
}

module.exports = {

    createAirport,
    getAirports,
    getairport,
    destroyairport
}