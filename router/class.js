const express = require('express')
const Class = require('../model/class')
const router = new express.Router()
const classctr=require('../controller/classctr')
const multer = require('multer')
const fromdata = multer()
//Add Class
router.post('/class', fromdata.none() ,classctr.set_class)

//Get Class
router.get('/class', classctr.get_class)

module.exports = router