const express = require('express')
const router= express.Router()

const{getAllJobs,viewAllJobs,deleteJobs,updateJobs, viewAJob} =require('../controller/jobController')
const requireAuth = require('../midleware/requireAuth') 

router.get('/',viewAllJobs)
router.get('/:id',viewAJob)
//midleware
router.use(requireAuth)

router.post('/',getAllJobs)

router.delete('/:id',deleteJobs)

router.patch('/:id',updateJobs)




module.exports= router
