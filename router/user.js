const express = require('express')
const User = require('../model/user')
const router = new express.Router()
const userctr=require('../controller/userctr')
const auth =require('../middleware/auth')

// #Add user
router.post('/user/login',userctr.set_user)

// #Get specific user by token
router.get('/user/:id',auth,userctr.get_user)

module.exports = router