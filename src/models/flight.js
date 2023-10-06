'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      // define association here
      this.belongsTo(models.Airplanes,{
        foreignKey:'airplaneId',
        as: 'Airplane_Details'
      })

      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportID',
        as: 'DEparture_Airport_Details',
      })


      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirporId',
        as: 'Arrival_Airport_Details',
      })
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportID:{
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalAirporId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    departureTime:{
      type: DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: {
      type:DataTypes.STRING
    },
    totalSeats:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};