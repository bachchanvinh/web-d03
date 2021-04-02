var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser')
const userController =require ('../controllers/users.controller')


router.get('/',userController.getUsers)
router.get('/:id', userController.getUsersbyID)
router.delete('/:id', userController.deleteUser)
router.post('/',bodyParser.json(),userController.postUser)
router.put('/:id',bodyParser.json(),userController.updateUser)
module.exports = router