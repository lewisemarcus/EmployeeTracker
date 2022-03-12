import express from 'express'
const updateEmRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db, updateEmployees } from '../public/server/server.js'
import cTable from 'console.table'
import { init } from '../public/scripts/inquirer.js'

//Update employee role fetch request.
const updateRole = (employee) =>
    fetch(`http://localhost:${PORT}/api/updateEmployeeRole/:employee_id`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    })
        .then((response) => {
            response.json()
        })
        .then((data) => {
            init()
            return data
        })
        .catch((error) => console.error('Error:', error))

updateEmRouter.put('/', ({ body }, req, res) => {
    console.log(req, body)
    db.query(sql, (err, result) => {
        console.log("ATTENTION", body)
        //Sends a json response containing a success note and the information of the employee updated.
        res.json({
            message: 'success',
            data: body
        })

    })

})

export { updateEmRouter, updateRole }