const express = require('express')
const Post = require('../model/post')
const router = new express.Router()
const postctr=require('../controller/postctr')

//Add Post
router.post('/post',postctr.set_post)

//Get Post
router.get('/post', postctr.get_post)

module.exports = router