const crudRepository = require('./crud-repository');
const { Airplanes  } = require('../models');






class Airplanesrepo extends crudRepository {

    constructor()
    {
        super(Airplanes);

    }
}

module.exports = Airplanesrepo;