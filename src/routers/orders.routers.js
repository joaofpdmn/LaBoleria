import express from 'express';
import { createOrder, getOrders, getOrdersByClientId, getOrdersById } from '../controllers/orders.controllers.js';
import { ordersAuth } from '../middlewares/orders.middlewares.js';

const orderRouter = express.Router();

orderRouter.post('/order', ordersAuth, createOrder);
orderRouter.get('/orders/', getOrders);
orderRouter.get('/orders/:id', getOrdersById);
orderRouter.get('/clients/:id/orders', getOrdersByClientId);

export { orderRouter };