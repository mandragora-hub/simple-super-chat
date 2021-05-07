const express = require('express');

const database = require('../../database');
const db = new database.Database();

function getBasicQuery(req, res, next) { 
    const e = {}
        if (req.query.q) e.query = req.query.q;
        e.page = parseInt(req.query.page) || 0;
        e.limit = parseInt(req.query.per_page) || 10;
        e.offset = e.page * e.limit;
        e.order_by = req.query.order_by || 'DESC';
        if (req.query.sort) e.sort = req.query.sort;
        req.searchOption = e;
        next();
};

module.exports = function (options = {}) {

    const router = express.Router();
    router.get('/rooms', getBasicQuery, async (req, res, next) => {
        db.searches.rooms(req.searchOption).then((rows) => {
            return res.status(200).json({
                code: 200,
                data: rows
            })
        })
    })
    
    return router;
}