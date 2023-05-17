import Joi from 'joi'
import { ObjectId } from 'joi-objectid';
const JoiObjectId = ObjectId(Joi);
const attr={
    name:Joi.string().required(),
    // shopId:Joi.string().regex('/^[A-Z]{4}\d{4}$/').required(),
    addressLine1:Joi.string().required(),
    addressLine2:Joi.string().required(),
    area:Joi.string().required(),
    city:Joi.string().required(),
    state:Joi.string().required(),
    zipcode:Joi.string().required(),
    category:JoiObjectId().required(),
    owner:JoiObjectId().required(),
    contactPerson:{
      name:Joi.string().required(),
      phone:Joi.string().required()
    }
}

export const shopsSchema = Joi.object(attr);