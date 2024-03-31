const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CoffeeShop extends Model {
        static associate(models) {
            // associations can be defined here
            CoffeeShop.belongsTo(models.User, {
                foreignKey: 'ownerId',
            });
            CoffeeShop.hasMany(models.Order, {
                foreignKey: 'shopId',
            });
        }
    }
    CoffeeShop.init({
        ownerId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'CoffeeShop',
    });
    return CoffeeShop;
};
