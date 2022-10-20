import connection from "../database/db.js";
import { cakesImageSchema, cakesSchema } from "../schemas/cakesSchema.js";

async function cakeAuth(req, res, next) {
    const { name, price, image, description } = req.body;
    const validation = cakesSchema.validate({ name, price, description });
    if (validation.error) {
        return res.sendStatus(400);
    }
    const isValidUrl = urlString => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
        return !!urlPattern.test(urlString);
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