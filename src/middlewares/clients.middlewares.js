import connection from "../database/db.js";
import { clientsSchema } from "../schemas/clientsSchema.js";

async function clientAuth(req, res, next) {
    const { name, address, phone } = req.body;
    const validation = clientsSchema.validate({ name, address, phone });
    if (validation.error) {
        return res.sendStatus(400);
    }
    try {
        const exist = await connection.query(`SELECT * FROM clients WHERE name = $1`, [name]);
        if (exist.rows.length > 0) {
            return res.sendStatus(409);
        }
        next();
    } catch (error) {
        return res.sendStatus(500);
    }
}

export { clientAuth };