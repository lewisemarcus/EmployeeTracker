// Import and require mysql2
import mysql from 'mysql2'
import { app } from '../app/app.js'
import { departments } from '../scripts/inquirer.js'
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
    flags:"-MULTI_STATEMENTS"
  },
  console.log(`Connected to the 'employees_db' database.
  \r\nServer running at http://localhost:${PORT}\r\n`)
)

//Gathers all departments, seeds and new, into list for display in inquirer.


const sql = `SELECT department_name from departments;`

//Function to retrieve departments after database connection.
const updateDepts = () => db.query(sql, (err, result) => {
    if (err) console.error(err)
    else {
      for(let each of result) {
        departments.push(each.department_name)
      }
        return departments
    }
})

updateDepts()

http.createServer(app).listen(PORT)

export { PORT, db , updateDepts }