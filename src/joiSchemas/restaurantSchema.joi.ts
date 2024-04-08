import Joi from 'joi'

const restaurantSchema: Joi.ObjectSchema<any> = Joi.object({
	picture: Joi.string().required(),
	name: Joi.string().required(),
	address: Joi.string().required(),
	workHour: Joi.string().required()
})

export { restaurantSchema }
