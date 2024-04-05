import { myDataSource } from '../database/connection'
import { Restaurant } from '../entities/restaurant'

const restaurantRepository = myDataSource.getRepository(Restaurant)

export { restaurantRepository }
