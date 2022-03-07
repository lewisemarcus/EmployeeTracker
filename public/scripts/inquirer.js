const inquirer = require('inquirer')

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Info'
        ]
    }
]

function init() {
    inquirer.prompt(questions)
        .then(function (choice) {

        })
}

module.exports = init