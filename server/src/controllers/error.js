const ApiResponse = require("../utils/apiResponse")

exports.errorHandler = function(err,req,res,next){

    if(err instanceof ApiResponse){
        res.send(err)
    }else{

        if(err.code =='ER_DUP_ENTRY'){
            return res.send(ApiResponse.error(`Already registered! Go to login!`));
        }
      
        res.send(ApiResponse.error(`Unpredictable error: ${err.message}`));
    }

}