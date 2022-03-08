import { viewEmployees } from '../../routes/viewEmployees.js'

import inquirer from 'inquirer'

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
            switch (choice.options) {
                case 'View All Roles':
                    break
                case 'View All Employees':
                    viewEmployees()
                    break
                case 'Add Department':
                    break
                case 'Add Role':
                    break
                case 'Add Employee':
                    break
                case 'Update Employee Info':
                    break
            }
        })
}

export { init }