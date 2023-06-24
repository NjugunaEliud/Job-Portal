const Application = require('../model/applicationModel')
const multer = require('multer');
const mongoose = require('mongoose');
// Set up multer storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads'); // Specify the destination folder where files will be stored
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//       const filename = file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop();
//       cb(null, filename);
//     }
//   });
  
  // Configure multer upload
  // const upload = multer({ storage: storage });
  


// POST APPLICATION
const apply=async(req, res)=>{
    const{name,email,phone,cover,jobA}=req.body
    // const resumeFile = req.file;
    // if (!resumeFile) {
    //     return res.status(400).json({ error: 'No resume file uploaded' });
    //   }
    // const resume = {
    //     filename: resumeFile.filename,
    //     originalname: resumeFile.originalname,
    //     filepath: resumeFile.path,
    //   };
    
    
    

    try{
      const jobId = new mongoose.Types.ObjectId(jobA);
        const applicat = await Application.create({name,email,phone,cover,jobA: jobId})

        res.status(201).json(applicat)

    }
    
    catch(error){
        res.status(400).json({error:error.message})

    }
}

// GET APPLICATIONS

// const viewApplications = async (req, res) => {
//   try {
//     const applicants = await Application.find({},title ,company).sort({});
//     res.status(200).json(applicants);
//     console.log(applicants)
//   } catch (error) {
//     res.status(400).json({ error: 'Could not get the Applications' });
//   }
// };
const viewApplications = async (req, res) => {
  try {
    const applicants = await Application.aggregate([
      {
        $lookup: {
          from: 'jobs', // Specify the name of the Job collection
          localField: 'jobA', // Field in the Application collection to match
          foreignField: '_id', // Field in the Job collection to match
          as: 'jobInfo' // Name of the field to store the joined Job document
        }
      },
      {
        $project: {
          name: 1,
          email: 1,
          phone: 1,
          cover:1,
          'jobInfo.title': 1,
          'jobInfo.company': 1
        }
        
      },
      {
        $sort: { createdAt: -1 }
      }
      
    ]);
   

    res.status(200).json(applicants);
  } catch (error) {
    res.status(400).json({ error: 'Could not get the Applications' });
  }
};

module.exports={
    apply,
    viewApplications,
  
}
