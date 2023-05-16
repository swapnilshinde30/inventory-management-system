
import Joi from "joi";

const attrs={
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.string().email().required(),
    phone:Joi.number().min(10).max(10).required(),
    userName:Joi.string().required(),
    password: Joi.string().required(),
    role:Joi.string().required(),
}

export const userSchema=Joi.object(attrs);