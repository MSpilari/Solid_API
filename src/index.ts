import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import { establishingConnectionWithDB } from './database/connection'
import { router } from './router'
import { errorHandler } from './helpers/errorHandler'

const server = express()

dotenv.config()

establishingConnectionWithDB()

const PORT = process.env.PORT

server.use(express.json())

server.use(router)

server.use(errorHandler)

server.listen(PORT, () => console.log('Server is running...'))
