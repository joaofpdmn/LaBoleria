import connection from '../database/db.js';

async function cakeCreator(req, res) {
    const { name, price, image, description } = req.body;
    try {
        await connection.query(`
            INSERT INTO cakes 
            (name, price, image, description)
            VALUES 
            ($1, $2, $3, $4);`, 
            [name, price, image, description]
        );
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export { cakeCreator };

