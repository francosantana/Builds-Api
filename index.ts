import mongoose from 'mongoose'

import app from './app'
const ExpressPort = 5000

app.listen(ExpressPort, async () => {
  mongoose.connect(process.env.MONGO!)
  console.log(`Started Api app v1 port ${ExpressPort}...`)
})
