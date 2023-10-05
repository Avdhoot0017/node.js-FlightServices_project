
const crudRepository = require('./crud-repository');
const { Flight  } = require('../models')






class Flightrepo extends crudRepository {

    constructor()
    {
        super(Flight);

    }
}

module.exports = Flightrepo;