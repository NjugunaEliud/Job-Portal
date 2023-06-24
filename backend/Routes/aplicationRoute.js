const express = require('express')
const router = express.Router()
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const {apply, viewApplications}= require('../controller/applicationController')


router.post('/', apply);

router.get('/', viewApplications)

module.exports= router