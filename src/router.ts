import express from 'express'
import { RestaurantController } from './controllers/Restaurant.controller'
import { RestaurantService } from './services/Restaurant.service'
import { restaurantRepository } from './repositories/restaurantRepo'
import { inputValidator } from './helpers/inputValidator'
import { restaurantSchema } from './joiSchemas/restaurantSchema.joi'
import { ProductService } from './services/Product.service'
import { productRepository } from './repositories/productRepo'
import { ProductController } from './controllers/Product.controller'
import { ProductSchema } from './joiSchemas/productSchema.joi'

const newRestaurantService = new RestaurantService(restaurantRepository)
const {
	getAllRestaurants,
	setNewRestaurant,
	getRestaurant,
	updateRestaurant,
	deleteRestaurant
} = new RestaurantController(newRestaurantService)

const newProductService = new ProductService(productRepository)
const { setNewProduct, getProductsFromRestaurant } = new ProductController(
	newProductService
)

const router = express.Router()

router.get('/allrestaurants', getAllRestaurants)

router.post(
	'/newrestaurant',
	inputValidator(restaurantSchema),
	setNewRestaurant
)

router.get('/restaurant/:id', getRestaurant)

router.put(
	'/restaurant/:id',
	inputValidator(restaurantSchema),
	updateRestaurant
)

router.delete('/restaurant/:id', deleteRestaurant)

router.post('/newproduct', inputValidator(ProductSchema), setNewProduct)

router.get('/product/:id', getProductsFromRestaurant)

export { router }
