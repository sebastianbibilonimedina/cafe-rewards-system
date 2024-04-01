const { Model, DataTypes } = require('sequelize');
const { sequelize } = global;

class Order extends Model {}

Order.init({
    orderid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    shopid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false, // set this to true if you have createdAt and updatedAt fields
});

Order.associate = function(models) {
    this.belongsTo(models.Menus, {
        foreignKey: 'menuid',
    });

    this.belongsTo(models.Users, {
        foreignKey: 'customerid',
    });
};

module.exports = Order;