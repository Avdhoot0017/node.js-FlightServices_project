const { application } = require('express');
const { Cityrepository } = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes')


    const cityrepository = new Cityrepository();

    async function createCity(data)
    {

        try {
            const city = await cityrepository.create(data);
            return city;
            
        } catch (error) {

        if(error.name == 'SequelizeUniqueConstraintError')
        {

            throw new Apperror('cannot create a new city Object' , StatusCodes.INTERNAL_SERVER_ERROR);
           
        }

            

           

            
        }


    }




    module.exports = {

        createCity

        
    }