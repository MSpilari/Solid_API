import { Repository } from 'typeorm'
import { Restaurant } from '../entities/restaurant'
import { IRestaurantService } from '../dto/RestaurantService.types'

class RestaurantService implements IRestaurantService {
	private restaurantRepo: Repository<Restaurant>

	constructor(restaurantRepo: Repository<Restaurant>) {
		this.restaurantRepo = restaurantRepo
	}

	listAllRestaurants = async (): Promise<Restaurant[]> => {
		const allRestaurantsService = await this.restaurantRepo.find({
			relations: ['products']
		})
		return allRestaurantsService
	}

	addNewRestaurant = async (userInput: Restaurant) => {
		const newRestaurant = await this.restaurantRepo.save(userInput)
		return newRestaurant
	}

	getSingleRestaurant = async (restaurantId: string) => {
		const restaurant = await this.restaurantRepo.findOne({
			where: { id: Number(restaurantId) }
		})

		if (!restaurant) throw new Error('ID not found')

		return restaurant
	}

	updateFieldsRestaurant = async (
		restaurantId: string,
		userInput: Restaurant
	) => {
		const restaurant = await this.restaurantRepo.exists({
			where: { id: Number(restaurantId) }
		})

		if (!restaurant) throw new Error('ID not found')

		await this.restaurantRepo.update(restaurantId, userInput)

		const newRestaurant = await this.restaurantRepo.findOne({
			where: { id: Number(restaurantId) }
		})

		return newRestaurant
	}

	deleteARestaurant = async (restaurantId: string) => {
		const isValid = await this.restaurantRepo.exists({
			where: { id: Number(restaurantId) }
		})

		if (!isValid) throw new Error('ID not found')

		await this.restaurantRepo.delete({
			id: Number(restaurantId)
		})

		return { success: `The Restaurant with ${restaurantId} was deleted` }
	}
}

export { RestaurantService }
