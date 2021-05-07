const express = require('express');

const database = require('../../database');
const db = new database.Database();

const { v4: uuidv4 } = require('uuid');


module.exports = function (options = {}) {

    const router = express.Router();
    router.get('/:uuid', async (req, res, next) => {
        const room = await db.models.room.findOne({
            where: {
                uuid: req.params.uuid
            },
        });
        if (!room) return next({ code: '404', stack: 'Not found room' })
        return res.json({
            code: 200,
            data: room
        })
    })

    router.post('/create', async (req, res, next) => {
        const room = await db.models.room.create({uuid: uuidv4(), roomName: req.body.roomName});
        if (!room) return next({ code: '404', stack: 'Not found room' })
        return res.json({
            code: 200,
            data: room
        })
    })

    
    
    return router;
}