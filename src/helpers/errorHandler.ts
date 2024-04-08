import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

const errorHandler: ErrorRequestHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	return res.status(500).json({ message: error.message })
}

export { errorHandler }
