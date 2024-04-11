import swaggerAutogen from 'swagger-autogen'

const outputFile = '../../swagger.json'
const endpointsFiles = ['../router.ts']

const doc = {
	openapi: '3.0.3',
	info: {
		title: 'Restaurants and Products API',
		description:
			'An Api that uses Postgres, TypeOrm and Express, that the user can register a restaurant and products from those.',
		version: '1.0.0'
	},
	host: 'localhost:3333',
	basePath: '/',
	schemes: ['http'],
	consumes: ['application/json'],
	produces: ['application/json']
}

const generateSwagger = async () => {
	await swaggerAutogen()(outputFile, endpointsFiles, doc)
	console.log('Swagger documentation generated successfully')
}

generateSwagger()
