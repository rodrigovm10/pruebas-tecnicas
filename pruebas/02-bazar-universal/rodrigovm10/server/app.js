import express, { json } from 'express'
import dotenv from 'dotenv'
import { corsMiddleware } from './middlewares/cors.js'
import { itemsRouter } from './routes/items.js'

export const app = express()
dotenv.config()

app.use(json())
app.use(corsMiddleware())

app.use('/api/items', itemsRouter)

app.disable('x-powered-by')
