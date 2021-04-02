const express = require('express')


const usersRoute = require('./routes/users.route')
const app = express()
const port = 8888

app.use('/users', usersRoute)

// app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.post('/users', (req, res) => {
//     const { name } = req.body
//     if (!name) {
//         return res.status(400).json({
//             isSuccess: false,
//             message: 'invalid name',
//             name: name
//         })
//     }
//     users.push({ id: `${users.length + 1}`, name })
//     res.status(200).json({
//         isSuccess: true,
//         message: 'Success',
//         users
//     })
// })


