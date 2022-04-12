const express = require('express')
const User = require('../model/user')
const router = new express.Router()
const userctr=require('../controller/userctr')

//Add user
router.post('/user', userctr.set_user)

//Get users
router.get('/user', userctr.get_user)

//login user
router.post('/user/login',userctr.login_user)
// http://localhost:3000/user/login
module.exports = router