import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { cakesRouter } from './routers/cakes.routers.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success'
    });
});

app.use(cakesRouter);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});
