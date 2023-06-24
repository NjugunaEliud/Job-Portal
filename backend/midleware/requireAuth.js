const jwt= require('jsonwebtoken')
const User=require('../model/userModel')
const  requireAuth= async(req,res,next)=>{
    //verify authentication
    const {authorization} =req.headers

    if(!authorization){
       return res.status(400).json({error:"Authorisation required"})
    }
    
    const token = authorization.split(' ')[1];

    try{
       const{_id} = jwt.verify(token,'njugunaeliudkamauinformationtechnology')

       
       req.user = await User.findOne({_id}).select('_id')


       next()


    }catch(error){
        console.log(error)
        res.status(401).json({error:"Request is not authorised"})

    }

}

module.exports=requireAuth