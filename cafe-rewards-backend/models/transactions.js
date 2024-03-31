const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        static associate(models) {
            // associations can be defined here
            Transaction.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        }
    }
    Transaction.init({
        userId: DataTypes.INTEGER,
        amount: DataTypes.DECIMAL,
        date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Transaction',
    });
    return Transaction;
};