import { updateRole } from '../../routes/updateRole.js'
import { viewEmployees } from '../../routes/viewEmployees.js'
import { addRole } from '../../routes/newRole.js'
import { addEmployee } from '../../routes/newEmployee.js'
import { viewRoles, getRoles } from '../../routes/viewRoles.js'
import { viewDepartments, getDepartments, seeDepartments } from '../../routes/viewDepartments.js'
import { addDept } from '../../routes/newDepartment.js'
import { deleteRole } from '../../routes/deleteRole.js'
import { deleteDept } from '../../routes/deleteDept.js'
import { deleteEm } from '../../routes/deleteEm.js'
import inquirer from 'inquirer'

const departments = []
const roles = []
const managers = []
const employees = []

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
            'Update Employee Role',
            'Delete Role',
            'Delete Department',
            'Delete Employee',
            'Quit'
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
            if(answers.options == 'Add Department') seeDepartments()
            return answers.options == 'Add Department'
        },
        validate: (value) => {
            if (value.split(' ').length < 1) return `Please enter a department.`
            if (departments.indexOf(value) != -1) return `Department already exists. Please enter a unique department name.`
            if (typeof value == "string" && value.trim().length != 0 && (/\d/.test(value) == false)) return true
            else return `Please enter a department.`
        }
    },
    {
        type: 'input',
        name: 'employeeName',
        message: `'Please enter the employee's first and last name(separated by a space): `,
        when: (answers) => answers.options == 'Add Employee',
        validate: (value) => {
            if(value.split(' ').length != 2 || value.split(' ').length != 3) return `Please enter a first and last name only.`
            if (typeof value == "string" && value.trim().length != 0 && value.indexOf(' ') != -1 && (/\d/.test(value) == false)) return true
            else return `Please enter the first and last name for the employee before continuing. `
        }
    },
    {
        type: 'list',
        name: 'chooseRole',
        message: 'Please select a role for the employee: ',
        choices: roles,
        when: (answers) => answers.employeeName
    },
    {
        type: 'list',
        name: 'managerYN',
        message: 'Is this employee a manager/lead?',
        choices: ['Yes','No'],
        when: (answers) => answers.chooseRole
    },
    {
        type: 'list',
        name: 'chooseManager',
        message: 'Please select a manager: ',
        choices: managers,
        when: (answers) => {
            if(answers.managerYN == 'No') return true
            else return false
        }
    },
    {
        type: 'list',
        name: 'chooseEmployee',
        message: 'Please select an employee to update their role: ',
        choices: employees,
        when: (answers) => answers.options == `Update Employee Role`
    },
    {
        type: 'list',
        name: 'updateRole',
        message: 'Please select a role for the employee: ',
        choices: roles,
        when: (answers) => answers.chooseEmployee
    },
    {
        type: 'list',
        name: 'deleteRole',
        message: 'Please select a role to delete: ',
        choices: roles,
        when: (answers) => answers.options == 'Delete Role'
    },
    {
        type: 'list',
        name: 'deleteDept',
        message: 'Please select a department to delete: ',
        choices: departments,
        when: (answers) => answers.options == 'Delete Department'
    },
    {
        type: 'list',
        name: 'deleteEm',
        message: 'Please select an employee to delete: ',
        choices: employees,
        when: (answers) => answers.options == 'Delete Employee'
    },
    
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
                case 'Update Employee Role':
                    updateRole(choice)
                    break
                case 'Delete Role':
                    deleteRole(choice)
                    break
                case 'Delete Department':
                    deleteDept(choice)
                    break
                case 'Delete Employee':
                    deleteEm(choice)
                    break
                case 'Quit':
                    process.exit()
            }
        })
}

export { init, departments, roles, managers, employees }