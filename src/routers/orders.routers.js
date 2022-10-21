import express from 'express';
import { createOrder } from '../controllers/orders.controllers.js';
import { ordersAuth } from '../middlewares/orders.middlewares.js';

const orderRouter = express.Router();

orderRouter.post('/order', ordersAuth, createOrder);

export { orderRouter };