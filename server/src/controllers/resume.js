
const resumeModel = require('../models/Resume')


exports.save = async function(req,res,next){
    try {
        await resumeModel.saveResume(req.body);
    } catch (error) {
        
    }
}