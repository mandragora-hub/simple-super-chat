const { Op } = require("sequelize");

function Searches(models, sequelize) {
    this.models = models;
    this.sequelize = sequelize;
    this.rooms = async ({ query, limit, offset, sort = 'roomName', order_by = 'DESC' }) => {
        return await this.models.room.findAndCountAll({
            include: [{
                model: this.models.user,
            }],
            limit: limit,
            offset: offset,
            order: [
                [sort, order_by],
            ],
        })
    }
}

module.exports = Searches;
