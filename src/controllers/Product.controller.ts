import { NextFunction, Request, Response } from 'express'
import { IProductService } from '../dto/ProductService.types'

class ProductController {
	private productService: IProductService

	constructor(productService: IProductService) {
		this.productService = productService
	}

	setNewProduct = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newProduct = await this.productService.addNewProduct(req.body)
			return res.status(201).json(newProduct)
		} catch (error) {
			next(error)
		}
	}
}

export { ProductController }
