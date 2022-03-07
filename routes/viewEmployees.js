const express = require('express')
const router = express.Router()

//Get method request to view all employees.
router.get('/', (req, res) => {
    const sql = `SELECT * FROM employees;`
})

module.exports = router