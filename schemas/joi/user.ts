import Joi from 'joi'

export const registerSchema = Joi.object({
  user: Joi.string().required().pattern(/^[A-Za-z][A-Za-z0-9_]{7,29}$/).message('User is invalid'),
  email: Joi.string().email().required(),
  name: Joi.string().required().max(40),
  password: Joi.string().required().max(20).pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message('Minimum eight characters, at least one letter and one number'),
  repeatPassword: Joi.ref('password')
})

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().max(20).pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message('Minimum eight characters, at least one letter and one number')
})

export const dataSchema = Joi.object({
  user: Joi.string().required().pattern(/^[A-Za-z][A-Za-z0-9_]{7,29}$/).message('User is invalid')
})
