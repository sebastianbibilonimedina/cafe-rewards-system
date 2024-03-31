const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/database/connection'); // require your database connection file

class DigitalWallets extends Model {}

DigitalWallets.init({
    userid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users', // 'users' refers to table name not model name
            key: 'userid',
        },
        allowNull: false
    },
    carddetails: DataTypes.BLOB, // bytea
    qrcode: DataTypes.TEXT,
    walletid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    sequelize,
    modelName: 'DigitalWallets',
    tableName: 'digitalwallets',
    timestamps: false,
});

module.exports = DigitalWallets;