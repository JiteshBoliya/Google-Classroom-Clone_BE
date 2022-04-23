const express = require('express')
const Post = require('../model/post')
const router = new express.Router()
const postctr=require('../controller/postctr')
const commentctr=require('../controller/commentctr')
const auth =require('../middleware/auth')
// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/post/");
//     },
//     filename: function (req, file, cb) {
//         cb(null, "Post" + path.extname(file.originalname));
//     },
// });
// const upload = multer({storage: storage});   
//
// #Add Post
router.post('/post',auth,postctr.set_post)

// #Get Post
router.get('/post/get/:id',auth, postctr.get_post)

// #Get comment
router.get('/comment/get/:pid',auth,commentctr.get_Comment)

// #Add comment
router.post('/comment',auth,commentctr.Add_comment)

module.exports = router