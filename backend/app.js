const express = require('express')
const DATA = require('./data/verbs-es.json')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/api/', (req, res) => {
  res.status(200).send(DATA)
})

module.exports = app
