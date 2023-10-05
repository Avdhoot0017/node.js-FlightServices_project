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



module.exports = {
    createFlight

    

}