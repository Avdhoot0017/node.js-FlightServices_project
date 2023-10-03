const crudRepository = require('./crud-repository');
const { City  } = require('../models');






class Cityrepository extends crudRepository {

    constructor()
    {
        super(City);

    }
}

module.exports = Cityrepository;
