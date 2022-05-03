import { expressjwt } from 'express-jwt'
import 'dotenv/config'

const JwtMiddleware = expressjwt(
  {
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
  }).unless({ path: ['/v1/user/login', '/v1/user/register'] })

export default JwtMiddleware
