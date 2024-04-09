import { Product } from '../entities/product'

interface IProductService {
	addNewProduct(userInput: Product): Promise<Product>
}

export { IProductService }
