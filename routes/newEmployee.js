import express from 'express'
const newEmRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db, updateManagers, updateEmployees } from '../public/server/server.js'
import cTable from 'console.table'
import { capitalizeFirstLetter } from '../public/scripts/helpers.js'
import { init } from '../public/scripts/inquirer.js'

//Add employee fetch request.
const addEmployee = (role) =>
    fetch(`http://localhost:${PORT}/api/newEmployee`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(role)
    })
        .then((response) => response.json())
        .then((data) => {
            init()
            return data
        })
        .catch((error) => console.error('Error:', error))

newEmRouter.post('/', ({ body }, res) => {
    const title = body.chooseRole.split(", ")[1]
    const titleId = body.chooseRole.split(", ")[0]
    const managerId = body.chooseManager.split(", ")[0]
    const nameArray = body.employeeName.split(" ")
    const first_name = capitalizeFirstLetter(nameArray[0]), last_name = capitalizeFirstLetter(nameArray[1])
    let full_name = first_name + last_name
    full_name = full_name.trim()

    if (body.managerYN == 'Yes') {

        const employeeSql = `INSERT INTO employees
        (first_name, last_name, title,  full_name)
        VALUES ("${first_name}", "${last_name}", "${title}", "${full_name}")`

        //Query to update managers table.
        db.query(employeeSql, (err) => {
            if (err) console.error(err)
            else {
                const managerSql = `INSERT INTO managers
                (manager_name)
                VALUES ("${full_name}")`

                db.query(managerSql, (err) => {
                    if (err) console.error(err)
                    else {

                        //Query to display employees.
                        db.query(`SELECT full_name FROM employees;`, (err, result) => {
                            if (err) console.error(err)
                            else {
                                //Sends a json response containing a success note and the information of the employee added.
                                res.json({
                                    message: 'success',
                                    data: body
                                })

                                //Logs the table of employees to the user's console for viewing.
                                console.log(`\r\nNew Employee List:\r\n${cTable.getTable(result)}`)

                                //Update employee list
                                updateEmployees()

                                //Update manager list.
                                updateManagers()
                            }
                        })
                    }
                })
            }
        })

    }
    else {
        const managerIdSql = `SELECT * FROM managers
        WHERE manager_id='${managerId}';`

        //Query to insert info into employee table.
        db.query(managerIdSql, (err, result) => {
            if (err) console.error(err)
            else {
                let { manager_id, manager_name } = result[0]
                const employeeSql = `INSERT INTO employees
                (first_name, last_name, title, title_id, manager_id, full_name, manager)
                VALUES ("${first_name}", "${last_name}", "${title}", ${titleId}, ${manager_id}, "${full_name}", "${manager_name}");`

                //Query to update managers table.
                db.query(employeeSql, (err, result) => {
                    if (err) console.error(err)
                    else {

                        //Query to display employees.
                        db.query(`SELECT full_name FROM employees;`, (err, result) => {

                            //Sends a json response containing a success note and the information of the employee added.
                            res.json({
                                message: 'success',
                                data: body
                            })

                            //Logs the table of employees to the user's console for viewing.
                            console.log(`\r\nNew Employee List:\r\n${cTable.getTable(result)}`)

                            //Update employee list
                            updateEmployees()
                        })
                    }
                })
            }
        })
    }
})

export { newEmRouter, addEmployee }