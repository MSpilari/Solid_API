import { myDataSource } from '../database/connection'
import { Product } from '../entities/product'

const productRepository = myDataSource.getRepository(Product)

export { productRepository }
