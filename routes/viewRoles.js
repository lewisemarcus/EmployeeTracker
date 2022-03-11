import express from 'express'
const viewRolesRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server/server.js'
import cTable from 'console.table'
import { init } from '../public/scripts/inquirer.js'


//Fetch request for use in Node terminal to retrieve all role information.
const viewRoles = () => 
    fetch(`http://localhost:${PORT}/api/viewRoles`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data
            init()
        })
        .catch((error) => console.error('Error:', error))

//Get method request to view all roles.
viewRolesRouter.get('/', (req, res) => {
    const sql = `SELECT * FROM titles;`
    db.query(sql, (err, result, rows) => {
        console.log('hello',sql)
        if (err) console.error(err)
        else {

        //Sends a json response containing a success note and the list of roles.
        res.json({
            message: 'success',
            data: result
        })

        //Logs the table of roles to the user's console for viewing.
        console.log(`\r\n${cTable.getTable(result)}`)
        }
    })
})

export { viewRolesRouter, viewRoles }