const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reward extends Model {
        static associate(models) {
            // associations can be defined here
        }
    }
    Reward.init({
        description: DataTypes.STRING,
        pointsRequired: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Reward',
    });
    return Reward;
};
