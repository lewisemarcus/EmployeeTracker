import { viewEmployees } from '../../routes/viewEmployees.js'
import { addRole } from '../../routes/newRole.js'
import { viewRoles, getRoles } from '../../routes/viewRoles.js'
import { viewDepartments, seeDepartments, getDepartments } from '../../routes/viewDepartments.js'
import { addDept } from '../../routes/newDepartment.js'
import inquirer from 'inquirer'
const departments = []


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
        message: ' ',
        when: (answers) => {
            if(answers.options == 'Add Role') getRoles()
            return answers.options == 'Add Role'
        },
        validate: (value) => {
            if (value.split(' ').length < 1) return `Please enter a title.`
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
        message: 'Please assign a department to the role: ',
        choices: departments,
        when: (answers) => answers.addSalary
    },
    {
        type: 'input',
        name: 'addDepartment',
        message: ' ',
        when: (answers) => {
            if(answers.options == 'Add Department') getDepartments()
            return answers.options == 'Add Department'
        },
        validate: (value) => {
            if (value.split(' ').length < 1) return `Please enter a department.`
            if (departments.indexOf(value) != -1) return `Department already exists. Please enter a unique department name.`
            if (typeof value == "string" && value.trim().length != 0 && (/\d/.test(value) == false)) return true
            else return `Please enter a department.`
        }
    }
]

function init() {
    inquirer.prompt(questions)
        .then(function (choice) {
            switch (choice.options) {
                case 'View All Departments':
                    viewDepartments()
                    break
                case 'View All Roles':
                    viewRoles()
                    break
                case 'View All Employees':
                    viewEmployees()
                    break
                case 'Add Department':
                    addDept(choice)
                    break
                case 'Add Role':
                    addRole(choice)
                    break
                case 'Add Employee':
                    addEmployee(choice)
                    break
                case 'Update Employee Info':
                    UpdateEmployee(choice)
                    break
                case 'Quit':
                    process.exit()
            }
        })
}

export { init, departments }