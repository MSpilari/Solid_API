import express from 'express'
import { RestaurantController } from './controllers/Restaurant.controller'
import { RestaurantService } from './services/Restaurant.service'
import { restaurantRepository } from './repositories/restaurantRepo'
import { InputValidator } from './helpers/inputValidator'
import { restaurantSchema } from './joiSchemas/restaurantSchema.joi'

const newRestaurantService = new RestaurantService(restaurantRepository)
const { getAllRestaurants, setNewRestaurant, getRestaurant } =
	new RestaurantController(newRestaurantService)
const { restaurantValidator } = new InputValidator(restaurantSchema)

const router = express.Router()

router.get('/allrestaurants', getAllRestaurants)
router.post('/newrestaurant', restaurantValidator, setNewRestaurant)
router.get('/restaurant/:id', getRestaurant)

export { router }
