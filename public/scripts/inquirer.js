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
            `Update Employee Info`,
            `Quit`
        ]
    }
]

function init() {
    inquirer.prompt(questions)
        .then(function (choice) {
            switch (choice.options) {
                case 'View All Roles':
                    viewRoles()
                    init()
                    break
                case 'View All Employees':
                    viewEmployees()
                    init()
                    break
                case 'Add Department':
                    addDepartment()
                    init()
                    break
                case 'Add Role':
                    addRole()
                    init()
                    break
                case 'Add Employee':
                    addEmployee()
                    init()
                    break
                case 'Update Employee Info':
                    UpdateEmployee()
                    init()
                    break
            }
        })
}

export { init }