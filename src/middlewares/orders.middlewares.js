import connection from "../database/db.js";
import { ordersSchema } from "../schemas/ordersSchema.js";

async function ordersAuth(req, res, next) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;
    const validation = ordersSchema.validate({ quantity, totalPrice });
    if (validation.error) {
        return res.sendStatus(400);
    }
    res.locals.totalPrice = totalPrice;
    res.locals.quantity = quantity;
    try {
        const clientExists = await connection.query(`SELECT * FROM clients WHERE id = $1;`, [clientId]);
        if (clientExists.rows.length === 0) {
            return res.sendStatus(404);
        }
        const cakeExists = await connection.query(`SELECT * FROM cakes WHERE id = $1;`, [cakeId]);
        if (cakeExists.rows.length === 0) {
            return res.sendStatus(404);
        }
        res.locals.clientExists = clientId;
        res.locals.cakeExists = cakeId;
        next();
    } catch (error) {
        return res.sendStatus(500);
    }
}

export { ordersAuth };