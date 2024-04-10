import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

const inputValidator = (schema: Joi.ObjectSchema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const userInput = req.body

		try {
			await schema.validateAsync(userInput)

			next()
		} catch (error) {
			next(error)
		}
	}
}

export { inputValidator }
