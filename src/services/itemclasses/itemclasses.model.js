import Joi from "joi";
import { ObjectId } from "joi-objectid";
const JoiObjectId=ObjectId(Joi)

const attrs={
    name:Joi.string().required(),
    category:JoiObjectId().required()
}

export const itemclassesSchema=Joi.object(attrs);