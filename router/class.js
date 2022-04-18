const Class = require('../model/class')
const ClassList= require('../model/ClassList')
const classctr=require('../controller/classctr')
const classlistctr=require('../controller/classlistctr')
const auth =require('../middleware/auth')
const express = require('express')
const router = new express.Router()
const multer = require('multer')
const fromdata = multer()

// #Add Class
router.post('/class',auth, fromdata.none() ,classctr.set_class)

// #Get Class
router.get('/class/get/:id',auth,classctr.get_class)

// #Get class by code
router.get('/class/getcode/:code',auth,classctr.get_classCode)

// #join class
router.post('/Joinclass',auth, fromdata.none() ,classlistctr.set_classlist)

// #show joined class
router.get('/class/get/:id',auth,classlistctr.get_classlist)

// #Get classdetail by classid 
router.get('/class/getclass/:id',auth,classctr.get_classDetail)

module.exports = router