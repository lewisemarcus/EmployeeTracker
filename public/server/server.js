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
    database: 'employees_db',
    flags:"-MULTI_STATEMENTS"
  },
  console.log(`Connected to the 'employees_db' database.
  \r\nServer running at http://localhost:${PORT}\r\n`)
)

http.createServer(app).listen(PORT)

export { PORT, db }