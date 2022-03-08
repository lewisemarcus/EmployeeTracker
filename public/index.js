import { init } from './scripts/inquirer.js'

import { db } from '../server.js'

const database = db()

init()

export { database }