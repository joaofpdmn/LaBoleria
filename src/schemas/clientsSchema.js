import Joi from "joi";

const clientsSchema = Joi.object({
    name: Joi.string().min(1).required().trim(),
    address: Joi.string().min(1).required().trim(),
});

export { clientsSchema };