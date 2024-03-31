const { Model, DataTypes } = require('sequelize');
const { sequelize } = global;

class CoffeeShops extends Model {}

CoffeeShops.init({
    shopid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ownerid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'CoffeeShops',
    tableName: 'coffeeshops',
    timestamps: false, // set this to true if you have createdAt and updatedAt fields
});

CoffeeShops.associate = function(models) {
    this.hasMany(models.Menus, {
        foreignKey: 'shopid',
    });

    this.hasMany(models.Orders, {
        foreignKey: 'shopid',
    });

    this.hasMany(models.Rewards, {
        foreignKey: 'shopid',
    });

    this.hasMany(models.Transactions, {
        foreignKey: 'shopid',
    });

    this.belongsTo(models.Owners, {
        foreignKey: 'ownerid',
    });
};

module.exports = CoffeeShops;