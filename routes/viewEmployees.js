import express from 'express'
const viewEmRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server.js'
import cTable from 'console.table'

const viewEmployees = () =>
    fetch(`http://localhost:${PORT}/api/viewEmployees`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        response.json()
    })
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error)
    })

//Get method request to view all employees.
viewEmRouter.get('/', (req, res) => {
    const sql = `SELECT * FROM employees`
    db.query(sql, (err,result, rows) => {
        if (err) {
             res.status(500).json({ error: err.message })
            return
        }
        res.json({
            message: 'success',
            data: rows
        })
        
        console.log(`\r\n${cTable.getTable(result)}`)
    })
})

export { viewEmRouter, viewEmployees }