import Joi from 'joi'

const ProductSchema = Joi.object({
	picture: Joi.string().required(),
	name: Joi.string().required(),
	price: Joi.string().required(),
	category: Joi.string().required(),
	promoDescription: Joi.string().required(),
	promoPrice: Joi.string().required(),
	daysOfPromo: Joi.string().required(),
	restaurant: Joi.number().required()
})

export { ProductSchema }
