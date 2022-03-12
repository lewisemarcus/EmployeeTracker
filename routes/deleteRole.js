import express from 'express'
const delRoleRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db, updateRoles } from '../public/server/server.js'
import { init } from '../public/scripts/inquirer.js'

//Delete role fetch request.
const deleteRole = (role) =>
    fetch(`http://localhost:${PORT}/api/deleteRole`, {
        method: 'DELETE',
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

delRoleRouter.delete('/', ({ body }, res) => {
    const sql = `DELETE FROM titles
    WHERE title_name='${body.deleteRole}'`

    db.query(sql, (err) => {
        if (err) console.error(err)
        else {

            //Sends a json response containing a success note and the information of the role deleted.
            res.json({
                message: 'success',
                data: body
            })
            console.log(`\r\nRole Deleted:\r\n`)

            //Update role list.
            updateRoles()
        }
    })
})

export { deleteRole, delRoleRouter }