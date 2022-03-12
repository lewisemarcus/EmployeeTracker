import { updateEmRouter } from '../../routes/updateRole.js'
import { viewEmRouter } from '../../routes/viewEmployees.js'
import { newRoleRouter } from '../../routes/newRole.js'
import { newEmRouter } from '../../routes/newEmployee.js'
import { viewRolesRouter } from '../../routes/viewRoles.js'
import { viewDeptRouter } from '../../routes/viewDepartments.js'
import { newDeptRouter } from '../../routes/newDepartment.js'
import { indexRouter } from '../../routes/index.js'
import { delRoleRouter } from '../../routes/deleteRole.js'
import { delDeptRouter } from '../../routes/deleteDept.js'
import { delEmRouter } from '../../routes/deleteEm.js'
import { updateManagerRouter } from '../../routes/updateManager.js'
import express from 'express'
const app = express()

// Express middleware.
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(express.static('public'))

app.use('/api/updateRole', updateEmRouter)

app.use('/api/updateManager', updateManagerRouter)

app.use('/api/newRole', newRoleRouter)

app.use('/api/deleteRole', delRoleRouter)

app.use('/api/deleteDept', delDeptRouter)

app.use('/api/deleteEm', delEmRouter)

app.use('/api/newEmployee', newEmRouter)

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