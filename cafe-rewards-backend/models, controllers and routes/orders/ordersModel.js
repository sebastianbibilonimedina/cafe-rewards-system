const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/database/connection'); // require your database connection file
const Menu = require('./Menu');
const Customer = require('./Customer');

class Order extends Model {}

Order.init({
    orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    menuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Menu,
            key: 'menuId'
        }
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'customerId'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false,
});

Order.belongsTo(Menu, { foreignKey: 'menuId' });
Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Order;