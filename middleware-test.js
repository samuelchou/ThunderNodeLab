const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
    console.log('Server middleware')
    next()
}

app.use(myLogger)

app.get('/', (req, res) => {
    console.log('Server say hi')
    res.send('Hello World!')
})

app.get('/users/:userId', (req, res) => {
    res.send(`you are now querying ${req.params.userId}`)
})


const hiddenMiddleware = function (req, res, next) {
    console.log(`Requesting unhandled url: ${req.originalUrl}`)
    next()
}

app.use(hiddenMiddleware)

app.listen(3000)

console.log('Server running at http://localhost:3000/');