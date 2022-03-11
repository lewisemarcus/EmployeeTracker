import './public/server/server.js'

import { loadEmployees } from './routes/index.js'

//Display employees on terminal load.
loadEmployees()