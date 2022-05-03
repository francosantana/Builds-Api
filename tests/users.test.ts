import { Server } from 'http'
import request from 'supertest'
import mongoose from 'mongoose'
import app from '../app'
// import UserDb from '../schemas/mongodb/user'

describe('User System', () => {
  let express: Server
  let api: request.SuperTest<request.Test>

  beforeAll(async () => {
    express = app.listen(6000)
    await mongoose.connect('mongodb://localhost:27017/test')
    api = request(app)
  })

  test('Cant access critical data whitout login', async () => {
    await api.get('/v1/user/franco').expect(401)
  })

  afterAll(() => {
    express.close()
  })
})
