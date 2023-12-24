import { ItemModel } from '../models/items.js'

export class ItemController {
	static async getAll(req, res) {
		const { q } = req.query
		const products = await ItemModel.getAll({ q })
		res.json(products)
	}

	static async getById(req, res) {
		const { id } = req.params
		const product = await ItemModel.getById({ id })

		if (product) return res.json(product)
		res.status(404).json({ message: 'Product not found' })
	}
}

// export class MovieController {
// 	static async getAll(req, res) {
// 		const { genre } = req.query
// 		const movies = await MovieModel.getAll({ genre })
// 		res.json(movies)
// 	}

// 	static async getById(req, res) {
// 		const { id } = req.params
// 		const movie = await MovieModel.getById({ id })
// 		if (movie) return res.json(movie)
// 		res.status(404).json({ message: 'Movie not found' })
// 	}

// 	static async create(req, res) {
// 		const result = validateMovie(req.body)

// 		if (result.error) {
// 			return res.status(400).json({ error: JSON.parse(result.error.message) })
// 		}

// 		const newMovie = await MovieModel.create({ input: result.data })

// 		res.status(201).json(newMovie)
// 	}

// 	static async update(req, res) {
// 		const result = validatePartialMovie(req.body)

// 		if (!result.success) {
// 			return res.status(400).json({ error: JSON.parse(result.error.message) })
// 		}

// 		const { id } = req.params

// 		const updateMovie = await MovieModel.update({ id, input: result.data })

// 		return res.json(updateMovie)
// 	}

// 	static async delete(req, res) {
// 		const { id } = req.params

// 		const result = await MovieModel.delete({ id })

// 		if (result === false) {
// 			return res.status(404).json({ message: 'Movie not found' })
// 		}

// 		return res.json({ message: 'Movie deleted' })
// 	}
// }
