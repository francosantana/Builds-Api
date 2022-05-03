import { NextFunction, Request, Response, Router } from 'express'
import { googleUtils } from '../../utils/googleAuth'
import asyncHandler from 'express-async-handler'
import { ExpressJwtRequestUnrequired } from 'express-jwt'
import validateRequest from '../../utils/validate'
import { loginSchema } from '../../schemas/joi/user'

const router: Router = Router()

const login = (req: Request, res: Response, _next: NextFunction) => {
  console.log(googleUtils.getUrl())
  res.send(req.path)
}

const register = (req: Request, res: Response, _next: NextFunction) => {
  console.log('Registering...')
  res.send(req.path)
}

const google = async (req: Request, res: Response, _next: NextFunction) => {
  console.log(await googleUtils.getUser(String(req.query.code)))
  res.send('User loged')
}

const data = (req: ExpressJwtRequestUnrequired, res: Response, _next: NextFunction) => {
  console.log(req.auth, req.params.username)
  res.send(req.path)
}

router.get('/login', [validateRequest(loginSchema), asyncHandler(login)])
router.post('/registrer', asyncHandler(register))
router.get('/google', asyncHandler(google))
router.get('/:username', asyncHandler(data))

export const UsersRoutes: Router = router
