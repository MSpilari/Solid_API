import express from 'express'
import { RestaurantController } from './controllers/Restaurant.controller'
import { RestaurantService } from './services/Restaurant.service'
import { restaurantRepository } from './repositories/restaurantRepo'
import { InputValidator } from './helpers/inputValidator'
import { restaurantSchema } from './joiSchemas/restaurantSchema.joi'
import { ProductService } from './services/Product.service'
import { productRepository } from './repositories/productRepo'
import { ProductController } from './controllers/Product.controller'
import { ProductSchema } from './joiSchemas/productSchema.joi'

const restaurantValidator = new InputValidator(restaurantSchema)
const productsValidator = new InputValidator(ProductSchema)

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
	restaurantValidator.inputValidator,
	setNewRestaurant
)
router.get('/restaurant/:id', getRestaurant)
router.put(
	'/restaurant/:id',
	restaurantValidator.inputValidator,
	updateRestaurant
)
router.delete('/restaurant/:id', deleteRestaurant)

router.post('/newproduct', productsValidator.inputValidator, setNewProduct)
router.get('/product/:id', getProductsFromRestaurant)

export { router }
