const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
            User.hasMany(models.Order, {
                foreignKey: 'userId',
            });
            User.hasMany(models.Transaction, {
                foreignKey: 'userId',
            });
        }
    }
    User.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING // Ejemplo: 'customer', 'admin'
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};