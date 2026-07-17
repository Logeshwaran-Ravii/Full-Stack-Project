const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'please enter name']
    },
    email:{
        type:String,
        required:[true,'please enter password'],
        unique:true,
        validate:[validator.isEmail,'please enter valid email']
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        maxlength:[6,'password cant exced 6'],
        select : false
    },
    role:{
        type:String,
        default: 'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

userSchema.pre('save', async function passwordHashing(){
    this.password =  await bcrypt.hash(this.password,10)
})

userSchema.methods.jwtTokenGenerate = ()=>{
     const token = jwt.sign({id:this.id},process.env.JWT_SCERETE,{expiresIn:process.env.JWT_EXPIRE_TIME})
     return token
}
userSchema.methods.isValidPassword = async (user, enteredPassword)=>{
    const password = user.password
     return await bcrypt.compare(enteredPassword,password)
}



const user = mongoose.model('user',userSchema)

module.exports =  user