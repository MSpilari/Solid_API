import { Repository } from 'typeorm'
import { Product } from '../entities/product'
import { CustomErrorHandler } from '../helpers/customErrorHandler'

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

		if (!product) throw new CustomErrorHandler(400, 'ID not found')

		await this.productRepo.update(productId, userInput)

		const newProduct = await this.productRepo.findOne({
			where: { id: Number(productId) }
		})

		return newProduct
	}

	deleteAProduct = async (productId: string) => {
		const isValid = await this.productRepo.exists({
			where: { id: Number(productId) }
		})

		if (!isValid) throw new CustomErrorHandler(400, 'ID not found')

		await this.productRepo.delete({
			id: Number(productId)
		})

		return { success: `The Product with ${productId} was deleted` }
	}
}

export { ProductService }
