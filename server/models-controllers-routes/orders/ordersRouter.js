const express = require('express');
const router = express.Router();
const OrderController = require('../orders/ordersController');

router.get('/', OrderController.getAll);
router.get('/:id', OrderController.getOne);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.delete);

module.exports = router;