 
const express = require('express');
const router = express.Router();

const resume = require('../controllers/resume')
const auth = require('../controllers/auth')

router.post('/resume/save',auth.validate,resume.save)

router.get('/resume/:id',resume.getPublicResume)
router.get('/resume',auth.validate,resume.get)
 

module.exports = router;