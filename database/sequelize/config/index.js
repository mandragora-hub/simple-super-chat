require('dotenv').config();

module.exports = {
  "development": {
    "username": "frogman",
    "password": "1234",
    "database": "simple_chat_dev",
    "host": '127.0.0.1',
    "dialect": 'mysql',
    "logging": false,
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
