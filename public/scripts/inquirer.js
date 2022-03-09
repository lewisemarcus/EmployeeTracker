import { viewEmployees } from '../../routes/viewEmployees.js'

import { addRole } from '../../routes/newRole.js'

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
    },
    {
        type: 'input',
        name: 'addTitle',
        message: 'What is the name of the role? ',
        when: (answers) => answers.options == 'Add Role',
        validate: (value) => {
            if(value.split(' ').length < 1) return `Please enter a title.`
            if (typeof value == "string" && value.trim().length != 0 && (/\d/.test(value) == false)) return true
            else return `Please enter a title for the role.`
        }
    },
    {
        type: 'input',
        name: 'addSalary',
        message: 'What is the salary of the role?(Please enter a number): ',
        when: (answers) => answers.addTitle,
        validate: (value) => {
            if (isNaN(value) || value.trim().length == 0) return `Please enter a number`
            else return true
        }
    },
    {
        type: 'list',
        name: 'chooseDepartment',
        message: 'Which department does the role belong to? ',
        choices: [`Engineering`,
                `Finance`,
                `Legal`,
                `Sales`,
                `Service`
        ],
        when: (answers) => answers.addSalary
    }
]

function init() {
    inquirer.prompt(questions)
        .then(function (choice) {
            switch (choice.options) {
                case 'View All Roles':
                    viewRoles()
                    break
                case 'View All Employees':
                    viewEmployees()
                    break
                case 'Add Department':
                    addDepartment()
                    init()
                    break
                case 'Add Role':
                    addRole(choice)
                    break
                case 'Add Employee':
                    addEmployee()
                    init()
                    break
                case 'Update Employee Info':
                    UpdateEmployee()
                    init()
                    break
                case 'Quit':
                    process.exit()
            }
        })
}

export { init }