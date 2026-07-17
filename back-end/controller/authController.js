const User = require('../model/userModel')
const { sendToken } = require('../utils/jwt')

exports.registerUser = async(req,res,next)=>{
    try{
        const {name,email,password} = req.body
        const newUser =  await User.create({
                                 name,
                                 email,
                                 password
                             })

                            
        sendToken(newUser,res)
    }catch(error){
        console.log(error);
        res.status(500).json('internal server error')
    }
}

exports.userLogin = async (req,res,next)=>{
    try{
        const {email,password}= req.body
        if(!email&&!password){
            return res.status(404).json({
                sucess:fail,
                message:'enter email or password'
            })
        }
        const user = await User.findOne({email}).select("+password")
        if(email!==user.email){
            return res.status(400).json('Enter email or password correctly')
        }
        if(!await user.isValidPassword(user,password)){
            return res.status(400).json('enter  emial or password correctly')
        }
        sendToken(user,res)
    }catch(error){
        console.log(error)
        res.status(500).json('internal server error')
    }
}