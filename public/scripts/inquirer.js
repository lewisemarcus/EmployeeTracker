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
            `Update Employee Info\r\n`
        ]
    }
]

function init() {
    inquirer.prompt(questions)
        .then(function (choice) {
            switch (choice.options) {
                case 'View All Roles':
                    init()
                    break
                case 'View All Employees':
                    viewEmployees()
                    init()
                    break
                case 'Add Department':
                    init()
                    break
                case 'Add Role':
                    init()
                    break
                case 'Add Employee':
                    init()
                    break
                case 'Update Employee Info':
                    init()
                    break
            }
        })
}

export { init }