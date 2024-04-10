import { Product } from '../entities/product'

interface IProductService {
	addNewProduct(userInput: Product): Promise<Product>
	productsFromRestaurant(
		restaurantId: string
	): Promise<Product[] | null | undefined>
}

export { IProductService }
