import { Router } from 'express'
import { ItemController } from '../controllers/items.js'

export const itemsRouter = Router()

itemsRouter.get('/:id', ItemController.getById)

itemsRouter.get('/', ItemController.getAll)
