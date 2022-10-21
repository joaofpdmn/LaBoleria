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

async function getOrders(req, res) {
    try {
        const orders = (await connection.query(`SELECT * FROM orders`)).rows;
        const ordersResponse = [];
        await Promise.all(orders.map(async (order) => {
            var client = (await connection.query(`SELECT * FROM clients WHERE id = $1;`, [order.clientId])).rows[0];
            var cake = (await connection.query(`SELECT * FROM cakes WHERE id = $1;`, [order.cakeId])).rows[0];
            ordersResponse.push({
                client: {
                    id: client.id,
                    name: client.name,
                    address: client.address,
                    phone: client.phone
                },
                cake: {
                    id: cake.id,
                    name: cake.name,
                    price: cake.price,
                    description: cake.description,
                    image: cake.image
                },
                orderId: order.id,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice
            });
        }));
        return res.status(200).send(ordersResponse);
    } catch (error) {
        return res.status(500).send(error);
    }

}

export {
    createOrder,
    getOrders
};