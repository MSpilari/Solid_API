import express from 'express'
import { RestaurantController } from './controllers/Restaurant.controller'
import { RestaurantService } from './services/Restaurant.service'
import { restaurantRepository } from './repositories/restaurantRepo'

const newRestaurantService = new RestaurantService(restaurantRepository)
const { getAllRestaurants } = new RestaurantController(newRestaurantService)

const router = express.Router()

router.get('/allrestaurants', getAllRestaurants)

export { router }
