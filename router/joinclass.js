const Class = require('../model/class')
const ClassList= require('../model/ClassList')
const classctr=require('../controller/classctr')
const classlistctr=require('../controller/classlistctr')
const auth =require('../middleware/auth')
const express = require('express')
const router = new express.Router()
const multer = require('multer')
const userAssignment = require('../model/userassignment')
const userassignment= require('../controller/userAssignment')
const fromdata = multer()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/userUploads/");
    },
    filename: function (req, file, cb) {
        cb(null, "Assignment" + path.extname(file.originalname))
    },
});
const upload = multer({storage: storage});   

// #Get Class Details
router.get('/class/get/:id',auth,classctr.get_class)

// #join class
router.post('/class/join',auth,classlistctr.join_class)

// #list of user for class
router.get('/class/userlist/:id',auth,classlistctr.get_userlist)

// #list of class for user
router.get('/class/classlist/:id',auth,classlistctr.get_classslist)

// #upload Assignment for user
router.post('/class/userssignment',auth,upload.array("file",5),classlistctr.upload_assignment)

// #Get all assignment by status
router.get('/class/assignment/bystatus/:id',userassignment.show_assignment_byStatus) 

// #sort all assignment by status
router.get('/class/assignment/sortbystatus/:id',userassignment.sort_assignment_byStatus)

// #sort all assignment by duedate
router.get('/class/assignment/sortbyduedate/:id',userassignment.sort_assignment_byduedate)

module.exports = router