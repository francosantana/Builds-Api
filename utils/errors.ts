import { Response, Request, NextFunction } from 'express'

const errorMid = (err: any, req: Request, res: Response, next: NextFunction) => {
  // Add error handles
  res.status(err.status).send({ msg: err.message })
}

export default errorMid
