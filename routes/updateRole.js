import express from 'express'
const updateEmRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server/server.js'
import cTable from 'console.table'
import { updateEmployees, updateManagers } from '../public/server/server.js'
import { init } from '../public/scripts/inquirer.js'

//Update employee role fetch request.
const updateRole = (employee) =>
    fetch(`http://localhost:${PORT}/api/updateRole`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    })
        .then((response) => response.json())
        .then((data) => {
            init()
            return data
        })
        .catch((error) => console.error('Error:', error))

updateEmRouter.put('/', ({ body }, res) => {

    const sql = `UPDATE employees
    SET title = "${body.updateRole}"
    WHERE full_name = '${body.chooseEmployee}';`

    db.query(sql, (err, result) => {
        if (err) console.error(err)
        else {

            //Query to display employees.
            db.query(`SELECT employee_id, full_name, title, manager FROM employees;`, (err, result) => {
                if (err) console.error(err)
                else {

                    //Sends a json response containing a success note and the information of the employee added.
                    res.json({
                        message: 'success',
                        data: body
                    })
                    
                    //Logs the table of employees to the user's console for viewing.
                    console.log(`\r\nNew Employee List:\r\n${cTable.getTable(result)}`)
                }
            })
        }
    })
})

export { updateEmRouter, updateRole }