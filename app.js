const app = express()

import express from 'express'
import { viewEmRouter } from './routes/viewEmployees.js'

// Express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end()
})

app.use('/api/viewEmployees', viewEmRouter)

export { app }