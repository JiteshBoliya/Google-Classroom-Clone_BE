const Class = require('../model/class')
const ClassList= require('../model/ClassList')
const classctr=require('../controller/classctr')
const classlistctr=require('../controller/classlistctr')
const auth =require('../middleware/auth')
const express = require('express')
const router = new express.Router()
const multer = require('multer')
const fromdata = multer()

// #Add/Create Class
router.post('/class',auth, fromdata.none() ,classctr.set_class)

// #Get Created Class
router.get('/class/get/:id',auth,classctr.get_class)

// #Get Classdetail by classid 
router.get('/class/getclass/:id',auth,classctr.get_classDetail)

// #get userid
router.get('/class/getUserid/:classid',auth,classctr.get_userid)

// #Get class details based on code
router.get('/class/code/join/:code',auth,classctr.get_classCode)
module.exports = router