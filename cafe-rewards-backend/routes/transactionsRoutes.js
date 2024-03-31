const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionsController'); // Added 's' to 'transactions'

// Route to create a new transaction
router.post('/', transactionController.createTransaction);

// Route to get all transactions
router.get('/', transactionController.getAllTransactions);

module.exports = router;