import Joi from 'joi'
import { ObjectId } from 'joi-objectid'
const JoiObjectId = ObjectId(Joi);

const attr = {
    name:Joi.string().required(),
    itemClass:JoiObjectId().required(),
    description:Joi.string.required()
}
export const itemsSchema = Joi.object(attr);