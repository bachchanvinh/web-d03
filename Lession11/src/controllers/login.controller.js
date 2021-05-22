const Users = require('../models/user.model.js')

module.exports.login = async (req, res) => {
    const { email, password } = req.body
    const userlogin = await Users.findOne({ email, password })
    if (userlogin) {
        return res.status(200).json({
            isSuccess: true,
            message: 'successfully login',
            userlogin
        })
    }
    res.status(400).json({
        isSuccess: false,
        message: 'Fails'
    })

}