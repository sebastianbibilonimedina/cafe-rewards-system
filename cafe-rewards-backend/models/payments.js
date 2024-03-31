const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
            // asociaciones aquí
            Payment.belongsTo(models.Order, {
                foreignKey: 'orderId',
                as: 'order',
            });
            // Otras asociaciones según la lógica de tu aplicación, como por ejemplo, con User si registras quién realiza el pago.
        }
    }
    Payment.init({
        orderId: DataTypes.INTEGER,
        amountPaid: DataTypes.DECIMAL,
        paymentMethod: DataTypes.STRING, // Ejemplo: 'credit_card', 'paypal', etc.
        status: DataTypes.STRING, // Ejemplo: 'completed', 'pending', 'failed'
        // Agrega más campos según sea necesario.
    }, {
        sequelize,
        modelName: 'Payment',
    });
    return Payment;
};
