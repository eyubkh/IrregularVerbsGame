const express = require('express')
const DATA = require('./data/verbs-es.json')
const app = express()

app.get('/api/', (req, res) => {
  res.status(200).send(DATA)
})

module.exports = app
