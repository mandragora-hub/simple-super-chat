const db = require('./sequelize');
const Searches = require('./searches');

class Database {
    constructor(options = {}) {
        this.models = db.sequelize.models;
        this.sequelize = db.sequelize;
        this.searches = new Searches(this.models, this.sequelize)

    }
}

exports.Database = Database;
