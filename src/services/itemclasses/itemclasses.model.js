import Joi from 'joi'
import JoiObjectId from 'joi-objectid'
const myJoiObjectId = JoiObjectId(Joi)

const attrs = {
  name: Joi.string().required(),
  category: myJoiObjectId().required()
}

export const itemclassSchema = Joi.object(attrs)
