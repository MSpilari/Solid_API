import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

class InputValidator {
	private schema: Joi.ObjectSchema

	constructor(schema: Joi.ObjectSchema<any>) {
		this.schema = schema
	}

	inputValidator = async (req: Request, res: Response, next: NextFunction) => {
		const userInput = req.body

		try {
			await this.schema.validateAsync(userInput)

			next()
		} catch (error) {
			next(error)
		}
	}
}

export { InputValidator }
