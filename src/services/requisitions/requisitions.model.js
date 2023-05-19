import Joi from 'joi'
import ObjectId from 'joi-objectid'
const JoiObjectId = ObjectId(Joi);
const attr = {
    shopItem:JoiObjectId().required(),
    requiredQuantity:{
        amount:Joi.number().required(),
        unit:Joi.string().required()
      },
    preferedDeliveryDate:Joi.string().required(),
    status:Joi.string().required(),
    cancellationReason:Joi.string().required(),
}

export const requisitionsSchema = Joi.object(attr)