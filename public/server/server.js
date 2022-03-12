// Import and require mysql2
import mysql from 'mysql2'
import { app } from '../app/app.js'
import { departments, roles, managers, employees } from '../scripts/inquirer.js'
import http from 'http'

const PORT = process.env.PORT || 3001

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    //MySQL password
    password: 'root',
    database: 'employees_db',
    flags: "-MULTI_STATEMENTS"
  },
  console.log(`Connected to the 'employees_db' database.
  \r\nServer running at http://localhost:${PORT}\r\n`)
)

//SQL query statements.
const deptSql = `SELECT department_name from departments;`
const roleSql = `SELECT title_name from titles;`
const managerSql = `SELECT manager_name from managers;`
const employeeSql = `SELECT full_name from employees;`


//Function to retrieve departments after database connection.
const updateDepts = () => db.query(deptSql, (err, result) => {
  if (err) console.error(err)
  else {

    //Gathers all departments, seeds and new, into list for display in inquirer.
    for (let each of result)
      if (departments.indexOf(each.department_name) == -1) departments.push(each.department_name)

    return departments
  }
})

//Function to retrieve roles after database connection.
const updateRoles = () => db.query(roleSql, (err, result) => {
  if (err) console.error(err)
  else {

    //Gathers all roles, seeds and new, into list for display in inquirer.
    for (let each of result)
      if (roles.indexOf(each.title_name) == -1) roles.push(each.title_name)

    return roles
  }
})

//Function to retreive managers after database connection.
const updateManagers = () => db.query(managerSql, (err, result) => {
  if (err) console.error(err)
  else {

    //Gathers all managers, seeds and new, into list for display in inquirer.
    for (let each of result) {
      if (each.manager_name == null) each.manager_name = "NULL"
      if (managers.indexOf(each.manager_name) == -1) managers.push(each.manager_name)
    }
    return managers
  }
})

const updateEmployees = () => db.query(employeeSql, (err, result) => {
  if (err) console.error(err)
  else {

    //Gathers all roles, seeds and new, into list for display in inquirer.
    for (let each of result)
      if (employees.indexOf(each.full_name) == -1) employees.push(each.full_name)

    return employees
  }
})

updateEmployees()

updateRoles()

updateDepts()

updateManagers()

http.createServer(app).listen(PORT)

export { PORT, db, updateDepts, updateRoles, updateManagers, updateEmployees }