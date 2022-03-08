import { database, listen } from './public/server.js'

import { init } from './public/scripts/inquirer.js'

database()

init()

listen()