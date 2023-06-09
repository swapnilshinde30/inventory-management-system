import Joi from 'joi'
import ObjectId from 'joi-objectid'
const myJoiObjectId = ObjectId(Joi)

const attrs = {
  shop: myJoiObjectId().required(),
  item: myJoiObjectId().required(),
  quantityAddition: {
    amount: Joi.number().required(),
    unit: Joi.string().required(),
    addedBy: myJoiObjectId.required()
  },
  availableQuantity: {
    amount: Joi.number().required(),
    unit: Joi.string().required()
  }
}

export const shopitemSchema = Joi.object(attrs)
