const express = require('express')
const viewEmployees = require('./routes/viewEmployees')
const app = express()

// Express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('public')

app.use('/api/viewEmployees', viewEmployees)

module.exports = app