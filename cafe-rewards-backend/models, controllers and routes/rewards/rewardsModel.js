const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path/to/database/connection'); // replace with your db connection file

class Reward extends Model {}

Reward.init({
    rewardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pointsRequired: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    validityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Reward',
    tableName: 'rewards',
    timestamps: false,
});

module.exports = Reward;