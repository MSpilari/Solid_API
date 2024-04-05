import { NextFunction, Request, Response } from 'express'
import { IRestaurantService } from '../services/Restaurant.service'

class RestaurantController {
	restaurantService: IRestaurantService

	constructor(restaurantService: IRestaurantService) {
		this.restaurantService = restaurantService
	}

	getAllRestaurants = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const allRestaurants = await this.restaurantService.listAllRestaurants()
			return res.status(200).json(allRestaurants)
		} catch (error) {
			next(error)
		}
	}
}

export { RestaurantController }
