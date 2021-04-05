var express = require('express')
var router = express.Router()
const userController =require ('../controllers/users.controller')


router.get('/',userController.getUsers)
router.get('/:id', userController.getUsersbyID)
router.delete('/:id', userController.deleteUser)
router.post('/',userController.postUser)
router.put('/:id',userController.updateUser)
module.exports = router