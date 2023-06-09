import Joi from 'joi'
import JoiObjectId from 'joi-objectid'
const myJoiObjectId = JoiObjectId(Joi)

const attr = {
  name: Joi.string().required(),
  itemClass: myJoiObjectId().required(),
  description: Joi.string().required()
}
export const itemSchema = Joi.object(attr)
