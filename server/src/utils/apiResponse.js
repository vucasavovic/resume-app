module.exports = class ApiResponse{

    constructor(error,code,message,payload=null){
        this.status={
            error:error,
            code:code,
            message:message
        }
        this.payload = payload;
    }

    static success (payload){
        return new ApiResponse(false,200,"Success!",payload)
    }
    static error(message,payload){
        return new ApiResponse(true,500,message,payload)
    }
    static custom(err,code,message,payload){
        return new ApiResponse(err,code,message,payload)
    }

}