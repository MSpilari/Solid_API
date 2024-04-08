import { Restaurant } from '../entities/restaurant'

interface IRestaurantService {
	listAllRestaurants(): Promise<Restaurant[]>
	addNewRestaurant(userInput: Restaurant): Promise<Restaurant>
	getSingleRestaurant(restaurantId: string): Promise<Restaurant | null>
}

export { IRestaurantService }
