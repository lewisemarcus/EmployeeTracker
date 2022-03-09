import { viewEmRouter } from '../../routes/viewEmployees.js'
import express from 'express'
const app = express()

// Express middleware.
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(express.static('public'))

app.use('/api/viewEmployees', viewEmRouter)

// Default response for any other request (Not Found).
app.use((req, res) => {
    res.status(404).end()
})

export { app }