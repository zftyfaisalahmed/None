const Userroute = require('express').Router()
const userController = require('../controller/userController')

Userroute.post(`/userInfo`, userController.userInfo)

module.exports = Userroute