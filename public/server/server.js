// Import and require mysql2
import mysql from 'mysql2'
import { app } from '../app/app.js'
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
    database: 'employees_db'
  },
  console.log(`Connected to the 'employees_db' database.
  \r\nServer running at http://localhost:${PORT}`)
)

const database = () => db

http.createServer(app).listen(PORT)

export { database, PORT, db }