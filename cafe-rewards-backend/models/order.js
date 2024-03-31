const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // associations can be defined here
            Order.belongsTo(models.User, {
                foreignKey: 'userId',
            });
            Order.belongsTo(models.CoffeeShop, {
                foreignKey: 'shopId',
            });
        }
    }
    Order.init({
        userId: DataTypes.INTEGER,
        shopId: DataTypes.INTEGER,
        totalAmount: DataTypes.DECIMAL,
        orderStatus: DataTypes.STRING, // Ejemplo: 'pending', 'completed'
        date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};
