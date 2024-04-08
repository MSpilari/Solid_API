import { Restaurant } from '../entities/restaurant'

interface IRestaurantService {
	listAllRestaurants(): Promise<Restaurant[]>
}

export { IRestaurantService }
