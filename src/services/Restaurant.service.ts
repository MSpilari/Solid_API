import { Repository } from 'typeorm'
import { Restaurant } from '../entities/restaurant'
import { IRestaurantService } from '../dto/RestaurantService.types'

class RestaurantService implements IRestaurantService {
	private restaurantRepo: Repository<Restaurant>

	constructor(restaurantRepo: Repository<Restaurant>) {
		this.restaurantRepo = restaurantRepo
	}

	listAllRestaurants = async (): Promise<Restaurant[]> => {
		const allRestaurantsService = await this.restaurantRepo.find()
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
		return restaurant
	}
}

export { RestaurantService }
