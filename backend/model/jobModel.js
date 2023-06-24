const mongoose= require('mongoose')
const Schema= mongoose.Schema

const JobsSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    requirements:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Job',JobsSchema);
    

    

