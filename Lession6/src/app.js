const express = require('express')

const usersRoute = require('./routes/users.route')
const postsRoute = require('./routes/posts.route')
const loginRoute = require('./routes/login.route')
const app = express()
const port = 8888
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/users',(req,res,next)=>{
    console.log('The request recieved at: ', new Date())
    next()
})

app.use('/users', usersRoute)
app.use('/posts',postsRoute)
app.use('/login',loginRoute)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




