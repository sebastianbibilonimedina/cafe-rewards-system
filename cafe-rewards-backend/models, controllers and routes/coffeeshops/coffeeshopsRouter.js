const express = require('express');
const router = express.Router();
const CoffeeShopsController = require('../coffeeshops/coffeeshopsController');

router.get('/', CoffeeShopsController.getAll);
router.get('/:id', CoffeeShopsController.getOne);
router.post('/', CoffeeShopsController.create);
router.put('/:id', CoffeeShopsController.update);
router.delete('/:id', CoffeeShopsController.delete);

module.exports = router;