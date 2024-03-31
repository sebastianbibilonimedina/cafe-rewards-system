const { Model, DataTypes } = require('sequelize');
const { sequelize } = global;
const bcrypt = require('bcryptjs');

class Owner extends Model {}

Owner.init({
    ownerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Owner',
    tableName: 'owners',
    timestamps: false,
    hooks: {
        beforeCreate: async (owner) => {
            const salt = await bcrypt.genSalt(10);
            owner.password = await bcrypt.hash(owner.password, salt);
        },
        beforeUpdate: async (owner) => {
            if (owner.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                owner.password = await bcrypt.hash(owner.password, salt);
            }
        },
    }
});

module.exports = Owner;