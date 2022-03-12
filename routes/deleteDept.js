import express from 'express'
const delDeptRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db, updateDepts } from '../public/server/server.js'
import { init } from '../public/scripts/inquirer.js'

//Delete department fetch request.
const deleteDept = (department) =>
    fetch(`http://localhost:${PORT}/api/deleteDept`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(department)
    })
        .then((response) => response.json())
        .then((data) => {
            init()
            return data
        })
        .catch((error) => console.error('Error:', error))

delDeptRouter.delete('/', ({ body }, res) => {
    const sql = `DELETE FROM departments
    WHERE department_name='${body.deleteDept}'`

    db.query(sql, (err) => {
        if (err) console.error(err)
        else {

            //Sends a json response containing a success note and the information of the department deleted.
            res.json({
                message: 'success',
                data: body
            })
            console.log(`\r\nDepartment Deleted:\r\n`)

            //Update department list.
            updateDepts()
        }
    })
})

export { deleteDept, delDeptRouter }