import { Repository } from 'typeorm'
import { Product } from '../entities/product'

class ProductService {
	private productRepo: Repository<Product>

	constructor(productRepo: Repository<Product>) {
		this.productRepo = productRepo
	}

	addNewProduct = async (userInput: Product): Promise<Product> => {
		const newProduct = await this.productRepo.save(userInput)
		return newProduct
	}

	productsFromRestaurant = async (restaurantId: string) => {
		const newProduct = await this.productRepo.find({
			where: { restaurant: { id: Number(restaurantId) } }
		})
		return newProduct
	}

	updateFieldsProduct = async (productId: string, userInput: Product) => {
		const product = await this.productRepo.exists({
			where: { id: Number(productId) }
		})

		if (!product) throw new Error('ID not found')

		await this.productRepo.update(productId, userInput)

		const newProduct = await this.productRepo.findOne({
			where: { id: Number(productId) }
		})

		return newProduct
	}
}

export { ProductService }
