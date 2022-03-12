import express from 'express'
const newDeptRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db, updateDepts } from '../public/server/server.js'
import { init } from '../public/scripts/inquirer.js'
import cTable from 'console.table'
import { capitalizeFirstLetter } from '../public/scripts/helpers.js'

//Add department fetch request.
const addDept = (department) =>
    fetch(`http://localhost:${PORT}/api/newDepartment`, {
        method: 'POST',
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

newDeptRouter.post('/', ({ body }, res) => {
    const newDepartment = capitalizeFirstLetter(body.addDepartment)
    const sql = `INSERT INTO departments
    (department_name)
    VALUES ("${newDepartment}");`

    //Query to add new department.
    db.query(sql, (err, result) => {
        if (err) console.error(err)
        else {

            //Query to display departments.
            db.query(`SELECT department_name FROM departments;`, (err, result) => {

                //Sends a json response containing a success note and the information of the department added.
                res.json({
                    message: 'success',
                    data: body
                })

                //Logs the table of departments to the user's console for viewing.
                console.log(`\r\n${cTable.getTable(result)}`)

                //Update department list.
                updateDepts()
            })
        }
    })
})

export { newDeptRouter, addDept }