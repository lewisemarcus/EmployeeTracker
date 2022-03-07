// Import and require mysql2
const mysql = require('mysql2')
const app = require('./app')

const PORT = process.env.PORT || 3001

// Connect to database
const db = mysql.createConnection(
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

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })