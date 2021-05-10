const express = require('express');

const database = require('../../database');
const db = new database.Database();

module.exports = function (options = {}) {

    const router = express.Router();
    router.get('/:id', async (req, res, next) => {
        const message = await db.models.message.findByPk( req.params.id, {
            include: db.models.room
        });
        if (!message) return next({ code: '404', stack: 'Not found' })
        return res.json({
            code: 200,
            data: message
        })
    })

    router.post('/create', async (req, res, next) => {
        if (!req.body) return next({ code: '404', stack: 'Not Valid'})
        const message = await db.models.message.create({
            body: req.body.body, 
            userId: req.body.userId, 
            roomId: req.body.roomId
        });
        return res.json({
            code: 200,
            data: message
        })
    })    
    
    return router;
}