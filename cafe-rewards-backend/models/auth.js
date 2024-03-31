const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Método para asociaciones.
         * Aquí puedes definir relaciones entre diferentes modelos.
         */

        // Verifica la contraseña contra el hash almacenado
        async validatePassword(password) {
            return await bcrypt.compare(password, this.password);
        }
    }
    User.init({
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Debe ser un correo válido"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "La contraseña no puede estar vacía"
                },
                len: [6, 100] // Establece una longitud mínima de contraseña
            }
        }
    }, {
        sequelize,
        modelName: 'User',
        // Hooks para manejar la contraseña
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        }
    });

    return User;
};
