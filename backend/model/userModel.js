const mongoose=require('mongoose')
const bcrypt = require('bcrypt')
const validator =require('validator')

const Schema= mongoose.Schema

const UserSchema =new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }


})

UserSchema.statics.signup = async function(email, password) {
   if(!email|| !password){
    throw error("All Fields are required")
   }

   if(!validator.isEmail(email)){
    throw error("Email is not Valid")
   }

   if(!validator.isStrongPassword(password)){
    throw error("Password not Strong enough")
   }
   
    const exists = await this.findOne({email})
    if(exists){
        throw error("Email alreadyin use")
    }
    const salt= await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password,salt)

    const user =await this.create({email, password:hash})

    return user


} 

UserSchema.statics.login = async function(email, password){
    if(!email|| !password){
        throw error("All Fields are required")
       }

    const user = await this.findOne({email})

    if(!user){
        throw error("Invalid email address")
    }

    const match= await bcrypt.compare(password, user.password)

    if(!match){
        throw error("Invalid Login Credential")
    }


    return user

}




module.exports= mongoose.model('User', UserSchema)
