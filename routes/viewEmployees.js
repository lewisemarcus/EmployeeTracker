import express from 'express'
const viewEmRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server/server.js'
import cTable from 'console.table'
import { init } from '../public/scripts/inquirer.js'

//Fetch request for use in Node terminal to retrieve all employee information.
const viewEmployees = () =>
    fetch(`http://localhost:${PORT}/api/viewEmployees`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data
            init()
        })
        .catch((error) => {
            console.error('Error:', error)
        })

//Get method request to view all employees.
viewEmRouter.get('/', (req, res) => {
    const sql = `SELECT * FROM employees`

    db.query(sql, (err, result, rows) => {
        if (err) console.error(err)
        else {
        //Sends a json response containing a success note and the list of employees.
        res.json({
            message: 'success',
            data: result
        })

        //Logs the table of employees to the user's console for viewing.
        console.log(`\r\n${cTable.getTable(result)}`)
        }
    })
})

export { viewEmRouter, viewEmployees }