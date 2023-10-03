const { Airplanesrepo } = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes')


const airplanerepository = new Airplanesrepo();


async function createAirplane(data) {

    try {
        const airplane = await airplanerepository.create(data);
        return airplane;

    } catch (error) {

        if (error.name == 'TypeError') {

            throw new Apperror('Cannnot prepare new airplaane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }

        throw error;


    }
}



async function getAirplanes() {
    try {
        const airplanes = await airplanerepository.getAll();
        return airplanes;


    } catch (error) {

        throw new Apperror('Cannot fetch data from all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}


async function getairplne(id) {

    try {
        const airplanes = await airplanerepository.get(id);
        return airplanes;


    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new Apperror('the airplane you requested is not present', error.statusCode);

        }

        throw new Apperror('Cannot fetch data from all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);

    }



}


async function destroyairplane(id) {

    try {
        const airplanes = await airplanerepository.destroy(id);
        return airplanes;


    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new Apperror('the airplane you requested  to delete is not present', error.statusCode);

        }

        throw new Apperror('Cannot fetch data from all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);

    }



}

async function updateplane(id,data)
{
    try {

        const updateit = await airplanerepository.update(id,data);
        return updateit;
        
    } catch (error) {

        throw new Apperror('not able to update it >>>!!' ,  StatusCodes.INTERNAL_SERVER_ERROR);

        
    }

}


module.exports = {
    createAirplane,
    getAirplanes,
    getairplne,
    destroyairplane,
    updateplane

}