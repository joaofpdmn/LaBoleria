import Joi from "joi";

const clientsSchema = Joi.object({
    name: Joi.string().min(1).required().trim(),
    address: Joi.string().min(1).required().trim(),
    phone: Joi.string()
    .min(10)
    .max(11)
    .required()
});

export { clientsSchema };