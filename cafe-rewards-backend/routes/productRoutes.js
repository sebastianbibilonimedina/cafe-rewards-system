const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Route to create a new product
// Accessible at POST /api/products
router.post('/', productController.createProduct);

// Route to get all products
// Accessible at GET /api/products
router.get('/', productController.getAllProducts);

module.exports = router;
