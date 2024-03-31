const { Model, DataTypes } = require('sequelize');
const { sequelize } = global;

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
    timestamps: false, // set this to true if you have createdAt and updatedAt fields
});

Transaction.associate = function(models) {
    this.belongsTo(models.User, {
        foreignKey: 'userId',
    });

    this.belongsTo(models.Coffeeshops, {
        foreignKey: 'shopId',
    });
};

module.exports = Transaction;