const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fname: Sequelize.STRING,
    lname: Sequelize.STRING,
    phone: Sequelize.INTEGER,
    dob: Sequelize.DATE,
    ssn: Sequelize.INTEGER,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.INTEGER,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = User;