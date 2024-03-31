const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {
            // associations can be defined here
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
        name: DataTypes.STRING, // Added based on your schema
        pointBalance: DataTypes.INTEGER, // Added based on your schema; ensure camelCase here matches your DB columns if using Sequelize
        role: DataTypes.STRING // Example roles: 'customer', 'admin'
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
