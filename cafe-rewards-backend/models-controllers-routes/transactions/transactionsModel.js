const { Model, DataTypes } = require('sequelize');
const { sequelize } = global;

class Transaction extends Model {}

Transaction.init({
    transactionid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    shopid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    purchaseamount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    pointsearned: {
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
    this.belongsTo(models.Users, {
        foreignKey: 'userid',
    });

    this.belongsTo(models.Coffeeshops, {
        foreignKey: 'shopid',
    });
};

module.exports = Transaction;