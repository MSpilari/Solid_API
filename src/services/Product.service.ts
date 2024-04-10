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
}

export { ProductService }
