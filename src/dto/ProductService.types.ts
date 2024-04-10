import { Product } from '../entities/product'

interface IProductService {
	addNewProduct(userInput: Product): Promise<Product>
	productsFromRestaurant(
		restaurantId: string
	): Promise<Product[] | null | undefined>
	updateFieldsProduct(
		productId: string,
		userInput: Product
	): Promise<Product | null>
	deleteAProduct(productId: string): Promise<{ success: string }>
}

export { IProductService }
