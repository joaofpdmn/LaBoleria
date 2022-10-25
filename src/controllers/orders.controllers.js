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
    const { date } = req.query;
    try {
        if (date) {
            const orderswithDate = (await connection.query(`SELECT * FROM orders WHERE "createdAt"::date = $1;`, [date])).rows;
            if (!orderswithDate.length) {
                return res.sendStatus(404);
            }
            const ordersResponse = [];
            await Promise.all(orderswithDate.map(async (order) => {
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
        }
        const orders = (await connection.query(`SELECT * FROM orders`)).rows;
        if (!orders.length) {
            return res.sendStatus(404);
        }
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
        return res.status(500).send(error.message);
    }
}

async function getOrdersById(req, res) {
    const { id } = req.params;
    try {
        const order = (await connection.query(`SELECT * FROM orders WHERE id = $1;`, [id])).rows;
        if (!order.length) {
            return res.sendStatus(404);
        }
        const clientOrder = (await connection.query(`SELECT * FROM clients WHERE id = $1;`, [order[0].clientId])).rows;
        const cakeOrder = (await connection.query(`SELECT * FROM cakes WHERE id = $1;`, [order[0].cakeId])).rows;
        const result = {
            client: {
                id: clientOrder[0].id,
                name: clientOrder[0].name,
                address: clientOrder[0].address,
                phone: clientOrder[0].phone
            },
            cake: {
                id: cakeOrder[0].id,
                name: cakeOrder[0].name,
                price: cakeOrder[0].price,
                image: cakeOrder[0].image,
                description: cakeOrder[0].description
            },
            orderId: order[0].id,
            createdAt: order[0].createdAt,
            quantity: order[0].quantity,
            totalPrice: order[0].totalPrice
        }
        return res.status(200).send(result);
    } catch (error) {
        return res.sendStatus(500);
    }
}

async function getOrdersByClientId(req, res) {
    const { id } = req.params;
    try {
        const allOrders = (await connection.query(`SELECT * FROM orders WHERE "clientId" = $1;`, [id])).rows;
        if (!allOrders.length) {
            return res.sendStatus(404);
        }
        const cakeNames = [];
        await Promise.all(allOrders.map(async (order) => {
            var cakeName = (await connection.query(`SELECT * FROM cakes WHERE id = $1;`, [order.cakeId])).rows[0];
            cakeNames.push(cakeName.name);
        }))
        const result = [];
        allOrders.forEach((order, index) => {
            result.push({
                orderId: order.id,
                quantity: order.quantity,
                createdAt: order.createdAt,
                totalPrice: order.totalPrice,
                cakeName: cakeNames[index]
            })
        })
        return res.status(200).send(result);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export {
    createOrder,
    getOrders,
    getOrdersById,
    getOrdersByClientId
};