var express = require('express')
var router = express.Router()

const loginController =require ('../controllers/login.controller')


router.post('/',loginController.Login)
module.exports = router