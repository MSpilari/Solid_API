import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import { Product } from '../entities/product'
import { Restaurant } from '../entities/restaurant'

dotenv.config()

const DB_URL = process.env.DB_URL

const myDataSource = new DataSource({
	type: 'postgres',
	entities: [Product, Restaurant],
	migrations: ['./src/migrations/*.ts'],
	logging: false,
	synchronize: true,
	url: DB_URL
})

const establishingConnectionWithDB = async () => {
	try {
		await myDataSource.initialize()
		return console.log('DB is connected...')
	} catch (err) {
		return console.log('Failed to connected to DB due to : ', err)
	}
}

export { myDataSource, establishingConnectionWithDB }
