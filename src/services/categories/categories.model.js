import Joi from 'joi'

const attr = {
    name:Joi.string().required()
}

export const categoriesSchema = Joi.object(attr);