import { ItemModel } from '../models/items.js'

export class ItemController {
  static async getAll (req, res) {
    const { q } = req.query
    const products = await ItemModel.getAll({ q })
    res.json(products)
  }

  static async getById (req, res) {
    const { id } = req.params
    const product = await ItemModel.getById({ id })

    if (product) return res.json(product)
    res.status(404).json({ message: 'Product not found' })
  }
}
