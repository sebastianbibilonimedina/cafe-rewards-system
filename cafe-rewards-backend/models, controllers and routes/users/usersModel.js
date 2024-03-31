const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/database/connection'); // replace with your db connection file

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

module.exports = User;