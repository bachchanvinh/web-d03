const User = require('../models/user.model.js')

module.exports.getUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).json({
        isSuccess: true,
        message: 'successfully received',
        users
    })
}

module.exports.getUsersbyID = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)

    if (user) {
        return res.status(200).json({
            isSuccess: true,
            message: 'successfully received',
            user
        })
    }

    res.status(400).json({
        isSuccess: false,
        message: 'not found the id user',
    })
}
module.exports.deleteUser = (req, res) => {
    const { id } = req.params
    User.findByIdAndDelete(id, req.body, function (err, doc) {
        if (err) {
            return res.status(500).json({
                isSucess: false,
                message: "Cant delete"
            })
        }
        res.status(200).json({
            isSucess: true,
            message: "Deleted sucessfully"
        })
    })


}

module.exports.postUser = (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            isSuccess: false,
            message: 'Missing required fields',
        })
    }
    const newUser = new User({ ...req.body })// create new user from modle
    newUser.save(function (err, doc) {// add data by .save
        if (err) {
            return res.status(500).json({
                isSuccess: false,
                message: "database error"
            })
        }
        else {
            return res.status(200).json({
                isSuccess: true,
                message: "user is successionfully created",
                newUser: doc
            })
        }
    })
}
module.exports.updateUser = (req, res) => {
    const { id } = req.params
    User.findByIdAndUpdate(id, req.body, function (err, doc) {
        if (err) {
            return res.status(500).json({
                isSuccess: false,
                message: 'User update failture with id'
            })
        }
        res.status(200).json({
            isSuccess: true,
            message: 'user is successfully updated',
            updatedUser: { ...doc._doc, ...req.body }
            // { ...doc._doc, ...req.body }
        })
    })

}