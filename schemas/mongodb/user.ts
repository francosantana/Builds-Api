import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  createAt: { type: String, default: Date.now() }
})

export default UserSchema
