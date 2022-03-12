import express from 'express'
const newRoleRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db, updateRoles } from '../public/server/server.js'
import { init } from '../public/scripts/inquirer.js'
import cTable from 'console.table'

//Add role fetch request.
const addRole = (role) =>
    fetch(`http://localhost:${PORT}/api/newRole`, {
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

newRoleRouter.post('/', ({ body }, res) => {
    const getIdsql = `SELECT * FROM departments
    WHERE department_name='${body.chooseDepartment}';`

    //Query to retrieve department_id 
    db.query(getIdsql, (err, result, rows) => {
        if (err) console.error(err)
        else {
            let { department_id, department_name } = result[0]

            const sql = `INSERT INTO titles
            (title_name, salary, department_id)
            VALUES ("${body.addTitle}", ${parseInt(body.addSalary)}, ${department_id});`

            //Query to update titles table.
            db.query(sql, (err, result) => {
                if (err) console.error(err)

                else {
                    //Sends a json response containing a success note and the information of the role added.
                    res.json({
                        message: 'success',
                        data: body
                    })

                    //Query to display roles.
                    db.query(`SELECT * FROM titles
                            WHERE title_name='${body.addTitle}';`, (err, result) =>

                        //Logs the table of titles to the user's console for viewing.
                        console.log(`\r\nRole Added:\r\n${cTable.getTable(result)}`))

                    //Update department list.
                    updateRoles()
                }
            })
        }
    })
})

export { newRoleRouter, addRole }