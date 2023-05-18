import Joi from "joi";
import joiObjectid from "joi-objectid";
const myJoiObjectId=joiObjectid(Joi);

const attrs={
    shopItem:myJoiObjectId().required(),
    requireQuantity:{
             amount:Joi.number().required(),
             unit:Joi.string().required()
      },
      preferedDeliveryDate:Joi.string()      
}
export const requisitionSchema=Joi.object(attrs)