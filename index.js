import { database } from './public/server/server.js'

import { init } from './public/scripts/inquirer.js'

//Initialize database.
database()

//Initialize inquirer.
init()