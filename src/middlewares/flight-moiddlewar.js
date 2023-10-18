const { StatusCodes } = require('http-status-codes');
const { errorresponce } = require('../utils/common');
const Apperror = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){

        errorresponce.message = 'something went wrong.......!';
        errorresponce.error = new Apperror(["flight number  not found"] , StatusCodes.BAD_REQUEST );
       
        return res.status(StatusCodes.BAD_REQUEST).json(errorresponce);
    }


    

    next();

}

function validateupdateseats(req,res,next)
{
    if(!req.body.seats){

        errorresponce.message = 'something went wrong.......!';
        errorresponce.error = new Apperror(["flight ID  not found"] , StatusCodes.BAD_REQUEST );
       
        return res.status(StatusCodes.BAD_REQUEST).json(errorresponce);
    }


    

    next();



}



module.exports = {

    validateCreateRequest,
    validateupdateseats
    
}