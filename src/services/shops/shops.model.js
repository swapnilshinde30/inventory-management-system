import Joi from 'joi'
import JoiObjectId from 'joi-objectid'
const myJoiObjectId = JoiObjectId(Joi)
const attr = {
  name: Joi.string().required(),
  // shopId:Joi.string().regex('/^[A-Z]{4}\d{4}$/').required(),
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string().required(),
  area: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zipcode: Joi.string().required(),
  category: myJoiObjectId().required(),
  owner: myJoiObjectId().required(),
  contactPerson: {
    name: Joi.string().required(),
    phone: Joi.string().required()
  }
}

export const shopSchema = Joi.object(attr)
