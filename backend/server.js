require('dotenv').config()
const express = require ('express')
const mongoose= require('mongoose')
const router = require('./Routes/JobsRoutes')
const userRouter = require('./Routes/userRoutes')
const applicationRouter = require('./Routes/aplicationRoute')
const { updateJobs } = require('./controller/jobController')
const app = express()
app.use(express.json())




mongoose.connect('mongodb+srv://Kamaa:Kamaa@mern.mbpiown.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000, ()=>{
        console.log("application is listning to port 3000")
    })

}).catch((error)=>{
    console.log(error)
})


app.use('/api/jobs', router)

app.use('/api/user' , userRouter)

app.use('/api/application' , applicationRouter )


// app.post('/api/search', async (req, res) => {
//     const searchTerm = req.body.searchTerm;
  
//     try {
//       const searchResults = await updateJobs
//         .find({ title: { $regex: searchTerm, $options: 'i' } })
//         .toArray();
  
//       res.json(searchResults);
//     } catch (error) {
//       console.error('Error performing search:', error);
//       res.status(500).json({ error: 'An error occurred during search' });
//     }
//   });
  
//   app.listen(3000, () => {
//     console.log('Server listening on port 3000');
//   });
  