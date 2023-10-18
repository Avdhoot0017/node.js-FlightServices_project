const { Op } = require('sequelize');
const { Flightrepository } = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');


const flightrepository = new Flightrepository();


async function createFlight(data) {

    try {
        const flight = await flightrepository.create(data);
        return flight;

    } catch (error) {

        if (error.name == 'TypeError') {

            throw new Apperror('Cannnot prepare new flight object', StatusCodes.INTERNAL_SERVER_ERROR);
        }

        throw error;


    }
}


async function getAllFlights(query)
{
    let custofilter = {};

    if(query.trips)
    {
        [departureAirportID,arrivalAirporId]  = query.trips.split("-");
        custofilter.departureAirportID= departureAirportID;
        custofilter.arrivalAirporId = arrivalAirporId;
    }

    if(query.price)
    {
        [miniprice,maxiprice] = query.price.split("-");
        custofilter.price = {
            [Op.between]: [miniprice,maxiprice]
        }
    }

    if(query.tarveller)
    {
        custofilter.totalseats = {
            [Op.gte]: query.tarveller
        }
    }

    try {

        const flights = await flightrepository.getAllFlights(custofilter);
        return flights;

        
    } catch (error) {

        throw new Apperror('Cannot fetch data from all flights', StatusCodes.INTERNAL_SERVER_ERROR);
        
    }


}


async function getFlights(id)
{
    try {
        const flight = await flightrepository.get(id);
        return flight;


    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new Apperror('the flight you requested is not present', error.statusCode);

        }

        throw new Apperror('Cannot fetch data from all flight', StatusCodes.INTERNAL_SERVER_ERROR);

    }

}


async function updateSeats(data)
{
    try {
        const responce = await flightrepository.updateremainingFlight(data.flightId, data.seats, data.dec);
        return responce;

        
    } catch (error) {

        throw new Apperror('Cannot update data from all flight', StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}


module.exports = {
    createFlight,
    getAllFlights,
    getFlights,
    updateSeats

    

}