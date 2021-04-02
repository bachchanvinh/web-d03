var express = require('express')
var router = express.Router()

const userController =require ('../controllers/users.controller')


router.get('/',userController.getUsers)
router.get('/:id', userController.getUsersbyID)
router.delete('/:id', userController.deleteUser)

router.post('/', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({
            isSuccess: false,
            message: 'invalid name',
            name: name
        })
    }

    users.push({ id: `${users.length + 1}`, name })
    res.status(200).json({
        isSuccess: true,
        message: 'Success',
        users
    })
})

module.exports = router