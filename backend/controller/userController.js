const User=require('../model/userModel')
const jwt= require('jsonwebtoken')

const createToken=(_id)=>{
   return jwt.sign({_id},'njugunaeliudkamauinformationtechnology',{ expiresIn:'3d' })
    
}

//login user
const LoginUser=async(req,res)=>{
    const {email,password} = req.body
    try{
        const user =await User.login(email,password)
        
    const token= createToken(user._id)
         res.status(200).json({email, token})

    }
    catch(Error){  
        res.status(400).json(Error.message)

    }

}


//signUp user
const SignUser=async(req,res)=>{
    const{email, password}=req.body


    try{
        const user =await User.signup(email,password)
        
    const token= createToken(user._id)
         res.status(200).json({email, token})

    }
    catch(error){
        res.status(400).json(error.message)

    }

}

module.exports={
    LoginUser,
    SignUser
}