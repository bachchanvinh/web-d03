const mongoose = require('mongoose')
const { Schema } = mongoose
const postSchema = new Schema(
    {
        'author': String,
        'content': String,
        'isClicked':Boolean,
        'isFocus':Boolean,
        'comments': [
            {
                'user': String,
                'comment': String
            }
        ]
    },
    {
        collection:'Posts'
    }
)
module.exports=mongoose.model('Post',postSchema)