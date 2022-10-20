import connection from "../database/db.js";
import { cakesImageSchema, cakesSchema } from "../schemas/cakesSchema.js";
import { isValidUrl } from "../schemas/urlSchema.js";

async function cakeAuth(req, res, next) {
    const { name, price, image, description } = req.body;
    const validation = cakesSchema.validate({ name, price, description });
    if (validation.error) {
        return res.sendStatus(400);
    }
    
    const valid = isValidUrl(image);
    if (!valid) {
        return res.sendStatus(422);
    }
    try {
        const exist = await connection.query(`SELECT * FROM cakes WHERE name = $1`, [name]);
        if (exist.rows > 0) {
            return res.sendStatus(409);
        }
    } catch (error) {
        return res.sendStatus(500);
    }
    next();
}

export { cakeAuth };