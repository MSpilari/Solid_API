import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { CustomErrorHandler } from './customErrorHandler'
import Joi from 'joi'

const errorHandler: ErrorRequestHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (error instanceof CustomErrorHandler) {
		return res.status(error.status).json({ message: error.message })
	}

	if (error instanceof Joi.ValidationError) {
		return res.status(400).json({ message: error.message })
	}

	return res.status(500).json({ message: error.message })
}

export { errorHandler }
