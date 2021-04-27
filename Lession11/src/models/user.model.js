const mongoose = require('mongoose')

const { Schema } = mongoose
const userSchema = new Schema(
    {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        isMale: Boolean,
        birthday: String,
        created: { type: Date, default: Date.now },
    },
    {
        collection:'Users'
    }
)

module.exports = mongoose.model('User',userSchema)
