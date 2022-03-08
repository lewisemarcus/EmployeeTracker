import express from 'express'
const viewEmRouter = express.Router()
import fetch from "node-fetch"

import { database } from '../public/index.js'

//Get method request to view all employees.
viewEmRouter.get('/', (req, res) => {
    const sql = `SELECT * FROM employees;`

    database.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
})

const viewEmployees = () =>
    fetch('/api/viewEmployees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

export { viewEmRouter, viewEmployees }