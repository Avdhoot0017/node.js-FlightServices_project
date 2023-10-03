const { StatusCodes } = require('http-status-codes');
const { errorresponce } = require('../utils/common');
const Apperror = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.name){

        errorresponce.message = 'something went wrong.......!';
        errorresponce.error = new Apperror(["cityname not found"] , StatusCodes.BAD_REQUEST );









        return res.status(StatusCodes.BAD_REQUEST).json(errorresponce);
    }

    next();

}



module.exports = {

    validateCreateRequest
}