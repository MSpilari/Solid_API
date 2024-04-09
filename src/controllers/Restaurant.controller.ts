import { NextFunction, Request, Response } from 'express'
import { IRestaurantService } from '../dto/RestaurantService.types'

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

	setNewRestaurant = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const newRestaurant = await this.restaurantService.addNewRestaurant(
				req.body
			)
			return res.status(201).json(newRestaurant)
		} catch (error) {
			next(error)
		}
	}

	getRestaurant = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params
			const restaurant = await this.restaurantService.getSingleRestaurant(id)
			return res.status(200).json(restaurant)
		} catch (error) {
			next(error)
		}
	}

	updateRestaurant = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { id } = req.params
			const userInput = req.body

			const restaurant = await this.restaurantService.updateFieldsRestaurant(
				id,
				userInput
			)

			return res.status(201).json(restaurant)
		} catch (error) {
			next(error)
		}
	}

	deleteRestaurant = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { id } = req.params

			const deletedRestaurant = await this.restaurantService.deleteARestaurant(
				id
			)

			return res.status(204).json(deletedRestaurant)
		} catch (error) {
			next(error)
		}
	}
}

export { RestaurantController }
