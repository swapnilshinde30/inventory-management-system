import Joi from 'joi'

const attrs = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().min(8).max(30).required(),
  phone: Joi.string().min(10).max(10).required(),
  userName: Joi.string().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().required()
}

export const userSchema = Joi.object(attrs)
