import express from 'express';
import { createOrder, getOrders } from '../controllers/orders.controllers.js';
import { ordersAuth } from '../middlewares/orders.middlewares.js';

const orderRouter = express.Router();

orderRouter.post('/order', ordersAuth, createOrder);
orderRouter.get('/orders', getOrders);

export { orderRouter };