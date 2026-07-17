const jwt = require('jsonwebtoken')
const User = require('../model/userModel')
exports.isAuthenticatedUser = async(req,res,next)=>{
    const { token } = req.cookies
    if(!token){
        return res.status(404).json('login first to access resourse')
    }
    const decode = jwt.verify(token,process.env.JWT_SCERETE)
    const {id} = decode
    const user = await User.findById(id)   
    req = user 
    next()

}