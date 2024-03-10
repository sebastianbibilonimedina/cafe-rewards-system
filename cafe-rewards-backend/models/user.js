// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/config'));

const User = sequelize.define('User', {
    // Define attributes here
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    // Add more attributes as needed
});

module.exports = User;