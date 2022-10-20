import express from 'express';
import { cakeCreator } from '../controllers/cakes.controlllers.js';
import { cakeAuth } from '../middlewares/cakes.middlewares.js';

const cakesRouter = express.Router();

cakesRouter.post('/cakes', cakeAuth, cakeCreator);

export { cakesRouter };