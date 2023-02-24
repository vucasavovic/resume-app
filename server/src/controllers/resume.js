const ApiResponse = require('../utils/ApiResponse');
const resumeModel = require('../models/Resume')


exports.getPublicResume = async function(req,res,next){
    const resumeId = req.params.id;
    try {
        const resume = await resumeModel.getByID(resumeId)
        res.send(ApiResponse.success(resume))
    } catch (error) {
        console.log(error)
        next(ApiResponse.error(error?.message))
    }
}

exports.get = async function(req,res,next){

    try {
        const resume = await resumeModel.get(req.userId)
        res.send(ApiResponse.success(resume))
    } catch (error) {
        console.log(error)
        next(ApiResponse.error(error?.message))
    }
}

exports.save = async function(req,res,next){
    req.body.userId = req.userId;
    console.log(req.body)
   
    try {
        await resumeModel.save(req.body);
        const resume = await resumeModel.get(req.userId)
        console.log(resume);
        res.send(ApiResponse.success(resume))
    } catch (error) {
        next(error)
    }
}