const bcrypt = require('bcrypt');
const userModel = require('../models/User')
const ApiResponse = require('../utils/apiResponse');

exports.register = async function(req,res,next){
    const {email,password,confirm} = req.body
    console.log(password);
    try {
        const hashpass = bcrypt.hashSync(password, 10);
        console.log(hashpass);
        const userId = await userModel.register('',email,hashpass);
        console.log(userId)
        const user = await userModel.getById(userId);
        res.send(ApiResponse.success(user));
    } catch (error) {
        next(error)
    }
}

exports.login = async (req,res,next)=>{
  const {email,password} = req.body;

  try {

    const user = await userModel.getByEmail(email);
    if(!user) return next(ApiResponse.error("Unknown user!"))
    
    const passMatch = await bcrypt.compare(password,user.hashpass);
    if(!passMatch) return next(ApiResponse.error("Email or password incorrect!"))
    
    //// session cookie
    req.session.isAuth = true;
 
    res.send(ApiResponse.success());
    
  } catch (error) {
      next(error)
  }
}