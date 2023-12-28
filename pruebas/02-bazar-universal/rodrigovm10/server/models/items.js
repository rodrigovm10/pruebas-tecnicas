import { readJSON } from '../utils/utils.js'

const { products } = readJSON('../products.json')

export class ItemModel {
	static async getAll({ q }) {
		if (q) {
			return products.filter(
				product =>
					product.title.toLowerCase().includes(q) || product.category.toLowerCase().includes(q)
			)
		}
	}

	static async getById({ id }) {
		const product = products.find(product => product.id.toString() === id)
		return product
	}
}
