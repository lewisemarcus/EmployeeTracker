import express from 'express'
const viewRolesRouter = express.Router()
import fetch from "node-fetch"
import { PORT, db } from '../public/server/server.js'
import cTable from 'console.table'