import joi from "joi";

const cakesSchema = joi.object({
    name: joi.string().min(2).required().trim(),
    price: joi.number().greater(0).required(),
    description: joi.string()
});

export { cakesSchema };