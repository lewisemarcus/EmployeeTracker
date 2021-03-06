import express from 'express'
const updateEmRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server/server.js'
import cTable from 'console.table'
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

    const employeeId = body.chooseEmployee.split(", ")[0]

    const titleName = body.updateRole.split(", ")[1]

    const sql = `UPDATE employees
    SET title = "${titleName}"
    WHERE employee_id = '${employeeId}';`

    db.query(sql, (err) => {
        if (err) console.error(err)
        else {

            //Query to display employees.
            db.query(`SELECT employees.employee_id, employees.full_name, employees.title, employees.manager, titles.salary, titles.department_id
            FROM employees 
            INNER JOIN titles ON titles.title_id=employees.title_id;`, (err, result) => {
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