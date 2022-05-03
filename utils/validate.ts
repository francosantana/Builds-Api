import { Response, Request, NextFunction } from 'express'
import Joi from 'joi'

const validateRequest = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body)
    res.send(validation)
  }
}

export default validateRequest
