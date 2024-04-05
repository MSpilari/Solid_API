import { Repository } from 'typeorm'
import { Restaurant } from '../entities/restaurant'

interface IRestaurantService {
	listAllRestaurants(): Promise<Restaurant[]>
}

class RestaurantService implements IRestaurantService {
	private restaurantRepo: Repository<Restaurant>

	constructor(restaurantRepo: Repository<Restaurant>) {
		this.restaurantRepo = restaurantRepo
	}

	listAllRestaurants = async (): Promise<Restaurant[]> => {
		const allRestaurantsService = await this.restaurantRepo.find()
		return allRestaurantsService
	}

	addNewRestaurantService = async () => {}
}

export { RestaurantService, IRestaurantService }
