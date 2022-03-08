// Import and require mysql2
import mysql from 'mysql2'
import { app } from './app.js'

const PORT = process.env.PORT || 3001

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    //MySQL password
    password: 'root',
    database: 'employees_db'
  },
  console.log(`Connected to the 'employees_db' database.`)
)

const database = () => db

const listen = () => app.listen(PORT, () => {
  console.log(`\r\nServer running at http://localhost:${PORT}`)
})

export { database, listen, PORT, db }