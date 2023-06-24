const { mongoose } = require('mongoose')
const Job=require('../model/jobModel')

//PoST
const getAllJobs= async (req, res)=>{
    const{title,requirements,location,description,salary,company}=req.body

    
    try{
        const user_id=req.user._id
        const job = await Job.create({title,requirements,location,description,salary,company, user_id})
        res.status(200).json(job)
    }
    

    catch(error){
        res.status(500).json(error.message)
    }

    
}

const viewAllJobs =async (req,res)=>{
    // const user_id=req.user._id
    const job = await Job.find({}).sort({createdAt:-1})
    res.status(200).json(job)
}

const viewAJob=async (req, res)=>{
    const{ id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'No such job exsists'})

    }
    const job = await Job.findById(id)

    if(!job){
        res.status(404).json({error:'No such job exsists'})

    }
    res.status(200).json(job)


}
const deleteJobs=async (req, res)=>{

}

const updateJobs=async (req, res)=>{
    
}

module.exports= {
    getAllJobs,
    viewAllJobs,
    viewAJob,
    deleteJobs,
    updateJobs
}


