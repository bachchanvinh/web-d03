module.exports.login = (req, res) => {
    const { userinform } = req.body
    if (!userinform) {
        return res.status(400).json({
            isSuccess: false,
            message: "Fails"
        })
    }
    return res.status(400).json({
        isSuccess: true,
        message: "Sucess",
        userinform
    })
}