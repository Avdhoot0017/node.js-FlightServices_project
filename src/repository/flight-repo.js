
const crudRepository = require('./crud-repository');
const {Flight,Airplanes,Airport} = require('../models');
const { Sequelize } = require('sequelize');
const db = require('../models');

const { addrowlock } = require('./queries');










class Flightrepo extends crudRepository {

    constructor()
    {
        super(Flight);
    

    }



    async getAllFlights(filter)
    {
        const responce = await Flight.findAll({
            where: filter,
            include: [{
                model: Airplanes,
                as: 'Airplane_Details'
            },
            {
                model: Airport,
                as: 'DEparture_Airport_Details',
                require: true,
                on: {
                    col1: Sequelize.where(Sequelize.col("Flight.departureAirportID"), "=" , Sequelize.col("DEparture_Airport_Details.code")) 

                }
            },
            {

                model: Airport,
                as: 'Arrival_Airport_Details',
                require: true,
                on: {
                    col1: Sequelize.where(Sequelize.col("Flight.arrivalAirporId"), "=" , Sequelize.col("Arrival_Airport_Details.code")) 

                }

            }
        ]
        })
        return responce;

    }

    async updateremainingFlight(flightId,seats,dec = true)
    {

        await db.sequelize.query(addrowlock(flightId));


        const flight = await Flight.findByPk(flightId);

        if(+dec)
        {
            const responce = await flight.decrement('totalSeats',{by: seats});
            return responce; 


        }
        else{

            const responce = await flight.increment('totalSeats',{by: seats});
            return responce;

        }


    }



}






module.exports = Flightrepo;