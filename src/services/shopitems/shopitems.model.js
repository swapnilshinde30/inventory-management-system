import Joi from "joi";
import { ObjectId } from "joi-objectid";
const JoiObjectId=ObjectId(Joi);

const attrs={
    shop:JoiObjectId().required(),
    item:JoiObjectId().required(),
    quantityAddition:{
        amount:Joi.number().required(),
        unit:Joi.number().required()
    },
    availableQuantity:{
        amount:Joi.number().required(),
        unit:Joi.number().required()
    }
}
export const shopitemSchema=Joi.object(attrs);
