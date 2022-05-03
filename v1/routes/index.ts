import { Router } from 'express'
import { UsersRoutes } from './user'
import JwtMiddleware from '../../utils/jwt'
const router: Router = Router()

router.use('/', JwtMiddleware)
router.use('/user', UsersRoutes)

export const MainRouter: Router = router
