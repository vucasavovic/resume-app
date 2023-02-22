 
const express = require('express');
const router = express.Router();

const resume = require('../controllers/resume')
 

router.post('/resume/save',resume.save)

 

module.exports = router;