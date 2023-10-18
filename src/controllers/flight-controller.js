const { flightservice } = require('../services');
const { successresponce, errorresponce } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');



async function createFlight(req , res) {
    try {
        const flights = await flightservice.createFlight({

        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirportID: req.body.departureAirportID,
        arrivalAirporId: req.body.arrivalAirporId,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price: req.body.price,
        boardingGate: req.body.boardingGate,
        totalSeats: req.body.totalSeats
        })

        successresponce.data = flights;
 

        return res.status(StatusCodes.CREATED).json(successresponce);

    } catch (error) {

        errorresponce.error = error;


        return res.status(error.statusCode).json(errorresponce);




    }
}


async function getAllFlights(req,res)
{
    try {

        const flights = await flightservice.getAllFlights(req.query); 


        successresponce.data = flights;
 

        return res.status(StatusCodes.CREATED).json(successresponce);
        
    } catch (error) {

        errorresponce.error = error;


        return res.status(error.statusCode).json(errorresponce);
        
    }

}




async function getFlight(req,res)
 {
    try {

        const flight = await flightservice.getFlights(req.params.id);
        successresponce.data = flight;
        return res.status(StatusCodes.OK).json(successresponce);


        
    } catch (error) {

        
        errorresponce.error = error;
        

        return res.status(error.statusCode).json(errorresponce);
        
    }
 }
 


 async function updateSeats(req , res)
 {
    try {
        const responce = await flightservice.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec
        })

        successresponce.data = responce;
        return res.status(StatusCodes.OK).json(successresponce);

        
    } catch (error) {

        errorresponce.error = error;
        

        return res.status(error.statusCode).json(errorresponce);
        
    }

 }









module.exports = {

    createFlight,
    getAllFlights,
    getFlight,
    updateSeats

}
























