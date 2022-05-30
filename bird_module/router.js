const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

router.get('/species/:name', (req, res, next) => {
  if (req.params.name === 'sparrow') next()
  else next('route') // unknown bird, skips out
}, (req, res, next) => {
  res.send(`This is bird ${req.params.name}`)
})

// handled unhandled species
router.get('/species/:name', (req, res, next) => {
  res.send(`The bird ${req.params.name} is still investigating.`)
})

module.exports = router