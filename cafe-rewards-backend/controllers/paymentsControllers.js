const { Payment } = require('../models');

// Procesar un nuevo pago
exports.processPayment = async (req, res) => {
    try {
        // Aquí podrías integrar lógica para interactuar con un servicio de pagos externo
        const payment = await Payment.create(req.body);
        res.status(201).json({ message: "Pago procesado exitosamente", payment });
    } catch (error) {
        console.error("Error al procesar el pago:", error);
        res.status(500).json({ message: "Error al procesar el pago", error: error.message });
    }
};

// Obtener detalles de un pago específico
exports.getPaymentDetails = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Pago no encontrado" });
        }
        res.status(200).json(payment);
    } catch (error) {
        console.error("Error al obtener detalles del pago:", error);
        res.status(500).json({ message: "Error al obtener detalles del pago", error: error.message });
    }
};
