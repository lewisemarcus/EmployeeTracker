import './public/server/server.js'

import { init } from './public/scripts/inquirer.js'
import { loadEmployees } from './routes/index.js'

//Reloads schema for database.
loadEmployees()

//Initialize inquirer.
init()