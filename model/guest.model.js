const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Guest = sequelize.define('tbl_logins', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Guest