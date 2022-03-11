import express from 'express'
const viewRolesRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server/server.js'
import cTable from 'console.table'
import { init } from '../public/scripts/inquirer.js'


//Fetch request for use in Node terminal to retrieve all role information and restart init.
const viewRoles = () =>
    fetch(`http://localhost:${PORT}/api/viewRoles`, {
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
const getRoles = () =>
    fetch(`http://localhost:${PORT}/api/viewRoles`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(`\r\nEnter the name of the role:  `)
            return data
        })
        .catch((error) => console.error('Error:', error))

//Get method request to view all roles.
viewRolesRouter.get('/', (req, res) => {
    const sql = `SELECT * FROM titles;`
    db.query(sql, (err, result, rows) => {
        if (err) console.error(err)
        else {

            //Sends a json response containing a success note and the list of roles.
            res.json({
                message: 'success',
                data: result
            })

            //Logs the table of roles to the user's console for viewing.
            console.log(`\r\nCurrent Roles\r\n${cTable.getTable(result)}`)
        }
    })
})

export { viewRolesRouter, viewRoles, getRoles }