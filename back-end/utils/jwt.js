exports.sendToken = (user,res)=>{
    //creating token
    const token = user.jwtTokenGenerate()
    //setting cookies
    const option = {
        expires : new Date(Date.now()+process.env.COOKIE_EXPIRE_TIME*24*60*60*1000),
        httpOnly : true
    }

    
    res.status(200)
    .cookie('token',token,option)
    .json({
        success:true,
        message:'ok',
        user,
        token
    })
}