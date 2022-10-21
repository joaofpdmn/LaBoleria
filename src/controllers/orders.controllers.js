import connection from "../database/db.js";

async function createOrder(req, res) {
    const clientId = res.locals.clientExists
    const cakeId = res.locals.cakeExists
    const quantity = res.locals.quantity;
    const totalPrice = res.locals.totalPrice;
    try {
        await connection.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1, $2, $3, $4);`,
        [clientId, cakeId, quantity, totalPrice]);
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export { createOrder };