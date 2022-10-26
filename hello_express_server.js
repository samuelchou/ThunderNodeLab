const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
  console.log(`You may connect to http://localhost:3000/cake.jpeg to see a cake.`)
})

app.get('/users/:userId/books/:bookId', (req, res) => {
  let userId = req.params.userId
  let bookId = req.params.bookId
  console.log(`Querying ${userId} - book ${bookId}`)
  let result = {"book":`${bookId}`,"content":`a book of ${userId}`}
  res.json(result)
})

app.get('/users/:userId', (req, res) => {
  res.send(`you are now querying ${req.params.userId}`)
})

const birds = require('./bird_module/router')

app.use('/birds', birds)

let cal = require('./calculation/fast-multiply')

console.log(`number 629 triple is ${cal.triple(629)}`)

let { do_double } = require('./calculation/fast-multiply')

console.log(`number 629 double is ${do_double(629)}`)
