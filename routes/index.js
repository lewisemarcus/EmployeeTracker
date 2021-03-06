import { db, PORT } from '../public/server/server.js'
import express from 'express'
import fetch from 'node-fetch'
import cTable from 'console.table'
import { init } from '../public/scripts/inquirer.js'

const indexRouter = express.Router()

const loadEmployees = () =>
    fetch(`http://localhost:${PORT}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data

            //Initialize inquirer.
            init()
        })
        .catch((error) => {
            console.error('Error:', error)
        })

indexRouter.get('/', (req, res) => {

    //Displays employees in console once database connection is established.
    db.query(`SELECT employees.employee_id, employees.full_name, employees.title, employees.manager, titles.salary, titles.department_id
    FROM employees 
    INNER JOIN titles ON titles.title_id=employees.title_id;`, (err, result) => {
        if (err) console.error(err)
        else {
            res.json({
                message: 'success',
                body: result
            })

            //Logs the table of employees to the user's console for viewing.
            console.log(`\r\n${cTable.getTable(result)}`)
        }
    })
})

export { loadEmployees, indexRouter }