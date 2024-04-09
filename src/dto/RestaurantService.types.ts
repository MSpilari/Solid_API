import { Restaurant } from '../entities/restaurant'

interface IRestaurantService {
	listAllRestaurants(): Promise<Restaurant[]>
	addNewRestaurant(userInput: Restaurant): Promise<Restaurant>
	getSingleRestaurant(restaurantId: string): Promise<Restaurant | null>
	updateFieldsRestaurant(
		restaurantId: string,
		userInput: Restaurant
	): Promise<Restaurant | null>
	deleteARestaurant(restaurantId: string): Promise<{ success: string } | null>
}

export { IRestaurantService }
