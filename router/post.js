const express = require('express')
const Post = require('../model/post')
const router = new express.Router()
const postctr=require('../controller/postctr')
const auth =require('../middleware/auth')
// #Add Post
router.post('/post',auth,postctr.set_post)

// #Get Post
router.get('/post/get/:id',auth, postctr.get_post)

module.exports = router