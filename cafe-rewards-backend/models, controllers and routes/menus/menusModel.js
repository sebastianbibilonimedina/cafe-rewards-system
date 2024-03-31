const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/database/connection'); // require your database connection file

class Menu extends Model {}

Menu.init({
    menuId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    itemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2), // Use decimal type for precise calculation
        allowNull: false
    },
    description: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Menu',
    tableName: 'menu',
    timestamps: false,
});

module.exports = Menu;