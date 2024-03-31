const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/database/connection'); // require your database connection file

class CoffeeShops extends Model {}

CoffeeShops.init({
    ownerid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    shopid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    sequelize,
    modelName: 'CoffeeShops',
    tableName: 'coffeeshops',
    timestamps: false,
});

module.exports = CoffeeShops;