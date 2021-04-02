const users = [
    {
        id: '1',
        name: 'Hieu',
    },
    {
        id: '69',
        name: 'Quang',
    },
    {
        id: '23',
        name: 'Vinh'
    }
]

module.exports.getUsers = (req, res) => {
    if (!users) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found the id user',
        })
    }
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })
}

module.exports.getUsersbyID = (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === id)
    if (!user) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found the id user',
        })
    }
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        user
    })
}
module.exports.deleteUser = (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === id)

    if (!user) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found the id user',
        })
    }
    const indexid = users.indexOf(user)
    users.splice(indexid, 1)
    return res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })
}

