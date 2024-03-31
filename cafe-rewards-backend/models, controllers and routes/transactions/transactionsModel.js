const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/database/connection'); // replace with your db connection file

class Transaction extends Model {}

Transaction.init({
    transactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    shopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    purchaseAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    pointsEarned: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    datetime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'transactions',
    timestamps: false,
});

module.exports = Transaction;