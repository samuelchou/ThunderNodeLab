const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users/:userId', (req, res) => {
    res.send(`you are now querying ${req.params.userId}`)
})

app.listen(3000)

console.log('Server running at http://localhost:3000/');