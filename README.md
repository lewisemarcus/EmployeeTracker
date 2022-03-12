#  Employee Tracker

  ![License: Academic Free v3.0 ](https://img.shields.io/badge/License-Academic%20Free%20v3.0-informational)

  ## Description

  ```md
GIVEN a command-line application that accepts user input
WHEN a user starts the application
THEN a user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, update an employee role, update an employee manager, as well as a delete function for employees, roles, and departments
WHEN a user chooses to view all departments
THEN a user is presented with a formatted table showing department names and department ids
WHEN a user chooses to view all roles
THEN a user is presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN a user chooses to view all employees
THEN a user is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN a user chooses to add a department
THEN a user is prompted to enter the name of the department and that department is added to the database
WHEN a user chooses to add a role
THEN a user is prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN a user chooses to add an employee
THEN a user is prompted to enter the employeeâ€™s name, role, and manager, and that employee is added to the database
WHEN a user chooses to update an employee role
THEN a user is prompted to select an employee to update and their new role and this information is updated in the database
WHEN a user chooses to update an employee's manager
THEN a user is prompted to select an employee to update and their new manager and this information is updated in the database
WHEN a user chooses to delete a department, employee, or role
THEN a user is prompted to select a department, employee, or role to delete and this information is updated in the database  
```

  ## Table of Contents

  - [Installation](#installation)

  - [Walkthrough](#walkthrough)

  - [Usage](#usage)

  - [Author(s)](#authors)

  - [Contributing](#contributing)

  - [License](#license)

  - [Questions](#questions)

  ## Installation

  Use the package manager [npm] to install console.table,inquirer,mysql2,node-fetch,jest,nodemon,supertest.
```bash

npm install console.table
npm install inquirer
npm install mysql2
npm install node-fetch
npm install jest
npm install nodemon
npm install supertest

# To run:
node index.js

```

  ## Walkthrough

  Here is a link to a video going over the steps to use the application: [Employee Tracker Demo](https://youtu.be/VmNTqdln7sw)

  ## Usage
  
N/A

  ## Author(s)

  - [lewisemarcus](https://github.com/lewisemarcus)


  
## Tests(CURRENTLY INACTIVE)
  
```js

npm test


```

  ## Contributing
 
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

  
## License

  Licensed under the Academic Free v3.0 License (the "License"); you may not use this file except in compliance with the License.

  For more information on the License, please visit:  https://opensource.org/licenses/afl-3.0

  ## Questions
  
- [Marcus Lewis](https://github.com/lewisemarcus) - Lead Author's GitHub Link
  
- If you would like to email me for further questions, please send one to: <lewisemarcus@gmail.com>
