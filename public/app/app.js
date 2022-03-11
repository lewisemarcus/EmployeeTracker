import { viewEmRouter } from '../../routes/viewEmployees.js'
import { newRoleRouter } from '../../routes/newRole.js'
import { viewRolesRouter } from '../../routes/viewRoles.js'
import { viewDeptRouter } from '../../routes/viewDepartments.js'
import { newDeptRouter } from '../../routes/newDepartment.js'
import { indexRouter } from '../../routes/index.js'
import express from 'express'
const app = express()

// Express middleware.
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(express.static('public'))

app.use('/api/newRole', newRoleRouter)

app.use('/api/viewRoles', viewRolesRouter)

app.use('/api/newDepartment', newDeptRouter)

app.use('/api/viewEmployees', viewEmRouter)

app.use('/api/viewDepartments', viewDeptRouter)

app.use('*', indexRouter)

// Default response for any other request (Not Found).
app.use((req, res) => {
    res.status(404).end()
})

export { app }