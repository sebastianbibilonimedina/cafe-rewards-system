const { Model, DataTypes } = require('sequelize');
const { sequelize } = global;

class User extends Model {}

User.init({
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pointbalance: {
        type: DataTypes.INTEGER,
        allowNull: true, // assuming users may not have points initially
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false, // set this to true if you have createdAt and updatedAt fields
});

User.associate = function(models) {
    this.hasOne(models.DigitalWallets, {
        foreignKey: 'userid',
    });
    this.hasMany(models.Orders, {
        foreignKey: 'userid',
    });
    this.hasMany(models.Transactions, {
        foreignKey: 'userid',
    });
}
module.exports = User;