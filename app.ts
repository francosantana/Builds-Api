import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import { MainRouter } from './v1/routes'
import errorMid from './utils/errors'

const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use('/v1', MainRouter) // Add Jwt check and Main Router
app.use(errorMid)

export default app
