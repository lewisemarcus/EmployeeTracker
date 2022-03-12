import { PORT, db } from '../public/server/server.js'
import express from 'express'
const viewDeptRouter = express.Router()
import fetch from "node-fetch"
import cTable from 'console.table'
import { init } from '../public/scripts/inquirer.js'


//Fetch request for use in Node terminal to retrieve all department information and restart init.
const viewDepartments = () =>
    fetch(`http://localhost:${PORT}/api/viewDepartments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            init()
            return data
        })
        .catch((error) => console.error('Error:', error))

//Fetch request for use in Node terminal to retrieve all department information.
const getDepartments = () =>
    fetch(`http://localhost:${PORT}/api/viewDepartments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(`\r\nEnter the department the role belongs to:  `)
            return data
        })
        .catch((error) => console.error('Error:', error))

//Get method request to view all departments.
viewDeptRouter.get('/', (req, res) => {
    const sql = `SELECT * FROM departments;`
    db.query(sql, (err, result, rows) => {
        if (err) console.error(err)
        else {

            //Sends a json response containing a success note and the list of departments.
            res.json({
                message: 'success',
                data: result
            })

            //Logs the table of departments to the user's console for viewing.
            console.log(`\r\nCurrent Departments\r\n${cTable.getTable(result)}`)
        }
    })
})

export { viewDeptRouter, viewDepartments, getDepartments }