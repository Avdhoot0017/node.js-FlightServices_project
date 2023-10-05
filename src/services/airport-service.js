const { Airportrepository } = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');


const airportrepository = new Airportrepository();


async function createAirport(data) {

    try {
        const airport = await airportrepository.create(data);
        return airport;

    } catch (error) {

        if (error.name == 'TypeError') {

            throw new Apperror('Cannnot prepare new airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }

        throw error;


    }
}



async function getAirports() {
    try {
        const airports = await airportrepository.getAll();
        return airports;


    } catch (error) {

        throw new Apperror('Cannot fetch data from all airports', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}


async function getairport(id) {

    try {
        const airport = await airportrepository.get(id);
        return airport;


    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new Apperror('the airport you requested is not present', error.statusCode);

        }

        throw new Apperror('Cannot fetch data from all airport', StatusCodes.INTERNAL_SERVER_ERROR);

    }



}


async function destroyairport(id) {

    try {
        const airport = await airportrepository.destroy(id);
        return airport;


    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new Apperror('the airport you requested  to delete is not present', error.statusCode);

        }

        throw new Apperror('Cannot destroy from all airport', StatusCodes.INTERNAL_SERVER_ERROR);

    }



}

async function updateport(id,data)
{
    try {

        const updateit = await airplanerepository.update(id,data);
        return updateit;
        
    } catch (error) {

        throw new Apperror('not able to update it >>>!!' ,  StatusCodes.INTERNAL_SERVER_ERROR);

        
    }

}


module.exports = {
    createAirport,
    getairport,
    getAirports,
    destroyairport

    

}