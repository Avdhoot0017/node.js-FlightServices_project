
const crudRepository = require('./crud-repository');
const { Airport  } = require('../models')






class Airportrepo extends crudRepository {

    constructor()
    {
        super(Airport);

    }
}

module.exports = Airportrepo;