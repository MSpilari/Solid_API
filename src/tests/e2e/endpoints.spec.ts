import 'reflect-metadata'
import request from 'supertest'
import { describe, expect, test, vi, beforeAll, afterEach } from 'vitest'
import { server } from '../../index' // Importe o aplicativo Express
import {
	establishingConnectionWithDB,
	myDataSource
} from '../../database/connection'
import { Restaurant } from '../../entities/restaurant'

describe('Restaurant Controllers tests', () => {
	beforeAll(async () => {
		if (!myDataSource.isInitialized) await establishingConnectionWithDB()
	})

	afterEach(async () => {
		await myDataSource.query(
			'TRUNCATE TABLE RESTAURANT CASCADE RESTART IDENTITY'
		)
	})

	test('Should be able to get status 200 and a empty array ', async () => {
		const response = await request(server).get('/allrestaurants')
		expect(response.status).toBe(200)
		expect(response.text).toEqual('[]')
	})

	test('Shouldn`t be able to post a new restaurant due to empty body', async () => {
		const response = await request(server).post('/newrestaurant').send({})
		expect(response.status).toBe(400)
		expect(response.body).toEqual({ message: 'picture is required' })
	})

	test('Shouldn`t be able to post a new restaurant if the body was incomplete', async () => {
		const response = await request(server)
			.post('/newrestaurant')
			.send({ picture: 'http://pictureUlr.com' })
		expect(response.status).toBe(400)
		expect(response.body).toEqual({ message: 'name is required' })
	})

	test('Shouldn`t be able to post a new restaurant if the types from body was incorrect', async () => {
		const response = await request(server)
			.post('/newrestaurant')
			.send({ picture: 1 })
		expect(response.status).toBe(400)
		expect(response.body).toEqual({ message: 'picture must be a string' })
	})

	test('Should be able to add a new restaurant', async () => {
		const userInput = {
			picture: 'rest3Picture',
			name: 'Restaurant 3',
			address: 'Av.Restaurant, 333',
			workHour: '33333333'
		}

		const response = await request(server)
			.post('/newrestaurant')
			.send(userInput)
		expect(response.status).toBe(201)

		const haveARestaurant = await request(server).get('/allrestaurants')

		console.log(haveARestaurant.body)
		expect(haveARestaurant.status).toBe(200)
		expect(haveARestaurant.body).toHaveLength(1)
	})
})
