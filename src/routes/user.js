const express = require('express');

const database = require('../../database');
const db = new database.Database();

module.exports = function (options = {}) {

    const router = express.Router();
    router.get('/:username', async (req, res, next) => {
        const user = await db.models.user.findOne({
            where: {
                username: req.params.username
            },
            include: db.models.room
        });
        if (!user) return next({ code: '404', stack: 'Not found user' })
        return res.json({
            code: 200,
            data: user
        })
    })

    router.post('/create', async (req, res, next) => {
        const room = await db.models.room.findOne({
            raw: true,
            where: {
                uuid: req.body.roomUuid
            },
        });
        if (!room) return next({ code: '404', stack: 'Not found room' })
        const user = await db.models.user.create({
            roomId: room.id,
            username: req.body.username
        });
        return res.json({
            code: 200,
            data: user
        })
    })    
    
    return router;
}