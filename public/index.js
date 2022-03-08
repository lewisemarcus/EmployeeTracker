import { database, listen } from '../server.js'

import { init } from './scripts/inquirer.js'

database()

init()

listen()