// Import and require mysql2
import mysql from 'mysql2'
import { app } from './app.js'

const PORT = process.env.PORT || 3001

// Connect to database
const db = () => {
 return mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    //MySQL password
    password: 'root',
    database: ''
  },
  console.log(`Connected to the 'employees_db' database.`)
)
}

const listen = () => app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export { db, listen }