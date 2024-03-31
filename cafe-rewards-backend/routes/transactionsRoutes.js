const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Ruta para crear una nueva transacción
router.post('/', transactionController.createTransaction);

// Ruta para obtener todas las transacciones
router.get('/', transactionController.getAllTransactions);

module.exports = router;
