import express from 'express'
const newRoleRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server/server.js'
import { init } from '../public/scripts/inquirer.js'
import cTable from 'console.table'

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
        data
        init()
    })
    .catch((error) => console.error('Error:', error))

newRoleRouter.post('/', ({body}, res) => {
    const sql = `INSERT INTO titles
    (tite_name)
    VALUES (?)`
    console.log(`\r\n${body}`)
    const params = [body]
})

export { newRoleRouter, addRole }