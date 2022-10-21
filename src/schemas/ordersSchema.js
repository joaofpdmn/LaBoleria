import Joi from "joi";

const ordersSchema = Joi.object({
    quantity: Joi.number().greater(0).less(5).required(),
    totalPrice: Joi.number().greater(0).required()
});

export { ordersSchema };