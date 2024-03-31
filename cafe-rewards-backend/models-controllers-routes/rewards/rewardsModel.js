const { Model, DataTypes } = require('sequelize');
const { sequelize } = global;

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
    timestamps: false, // set this to true if you have createdAt and updatedAt fields
});

Reward.associate = function(models) {
    this.belongsTo(models.Coffeeshops, {
        foreignKey: 'shopId',
    });
};
module.exports = Reward;