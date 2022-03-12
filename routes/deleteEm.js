import express from 'express'
const delEmRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db, updateEmployees } from '../public/server/server.js'
import { init } from '../public/scripts/inquirer.js'

//Delete employee fetch request.
const deleteEm = (employee) =>
    fetch(`http://localhost:${PORT}/api/deleteEm`, {
        method: 'DELETE',
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

delEmRouter.delete('/', ({ body }, res) => {
    const employeeId = body.deleteEm.split(", ")[0]
    const sql = `DELETE FROM employees
    WHERE employee_id='${employeeId}'`

    db.query(sql, (err) => {
        if (err) console.error(err)
        else {

            //Sends a json response containing a success note and the information of the employee deleted.
            res.json({
                message: 'success',
                data: body
            })
            console.log(`\r\nEmployee Deleted:\r\n`)

            //Update employee list.
            updateEmployees()
        }
    })
})

export { deleteEm, delEmRouter }