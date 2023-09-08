const Sequelize = require('sequelize');
const dbConfig = require('./dbConnection'); // Your database configuration

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;