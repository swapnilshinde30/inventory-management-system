import Joi from 'joi'

const attr = {
  name: Joi.string().required()
}

export const categorySchema = Joi.object(attr)
