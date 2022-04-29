const express = require('express')
const Assignment = require('../model/assignment')
const router = new express.Router()
const assignmentctr=require('../controller/assignmentctr')
const auth =require('../middleware/auth')
const multer = require("multer");
const path = require("path");
const UserAssignment = require('../model/userassignment')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assignment/");
    },
    filename: function (req, file, cb) {
        cb(null, "Assignment" + path.extname(file.originalname))
    },
});
const upload = multer({storage: storage});   

// #Add Assignment
router.post('/assignment',auth,upload.array("file",5),assignmentctr.Add_assignment)

// #Get Assignment
router.get('/assignment/get/:id',auth,assignmentctr.get_assignment)

// #Get all Assignment
router.get('/assignment/get',auth,assignmentctr.get_AllAssignment)

// #Get specific Asiignment
router.get('/assignment/getsp/:id',auth,assignmentctr.get_specific_assignment)

// #Get all user assignment 
router.get('/assignment/user/all/assignment/:id',auth,assignmentctr.get_alluser_assignment)

// #get class id by assignment
router.get('/assignment/getclass/:id',auth,assignmentctr.get_class)

module.exports = router 