const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'TeleApp4850!', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;