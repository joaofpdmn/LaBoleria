import express from 'express';
import { createClient } from '../controllers/clients.controllers.js';
import { clientAuth } from '../middlewares/clients.middlewares.js';

const clientsRouter = express.Router();

clientsRouter.post('/clients', clientAuth, createClient);

export { clientsRouter };