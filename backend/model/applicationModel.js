const mongoose = require('mongoose')

const Schema = mongoose.Schema


const applicationSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    }, 
    cover:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:Number
    },
    jobA: {  type: Schema.Types.ObjectId,
        ref: 'Job'}
})

module.exports=mongoose.model('Application', applicationSchema)