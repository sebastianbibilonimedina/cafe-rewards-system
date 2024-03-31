const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

// Ruta para procesar un nuevo pago
router.post('/', paymentsController.processPayment);

// Ruta para obtener detalles de un pago específico
router.get('/:id', paymentsController.getPaymentDetails);

module.exports = router;
