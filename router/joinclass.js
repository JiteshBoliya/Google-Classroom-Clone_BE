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
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/userUploads/");
    },
    filename: function (req, file, cb) {
        cb(null, "Assignment" + path.extname(file.originalname))
    },
});
const upload = multer({storage: storage});   


//=========== basic fatch data =================

// #Get Class Details
router.get('/class/get/:id',auth,classctr.get_class)

// #list of user for class
router.get('/class/userlist/:id',auth,classlistctr.get_userlist)

// #list of class for user
router.get('/class/classlist/:id',auth,classlistctr.get_classslist)

// #Get all assignment by status
router.get('/class/assignment/bystatus/:id',auth,userassignment.show_assignment_byStatus) 

// #Get assignment Status
router.get('/assignment/getStatus/:id',auth,userassignment.get_assignment)

// #Get count status
router.get('/assignment/count/status/:status/:assignment',auth,userassignment.Count_assignmentStatus)

// #Get user assignment details
router.get('/assignment/userAssignment/get',auth,classlistctr.get_UserAssignmentUpdate)


//==================== create =====================

// #join class
router.post('/class/join',auth,classlistctr.join_class)

// #upload Assignment for user
router.post('/assignment/userAssignment',auth,upload.array("file",5),classlistctr.upload_assignment)

//===================== sort ====================

// #sort all assignment by status
router.get('/class/assignment/sortbystatus/:id',auth,userassignment.sort_assignment_byStatus)

// #sort all assignment by duedate
router.get('/class/assignment/sortbyduedate/:id',auth,userassignment.sort_assignment_byduedate)

module.exports = router