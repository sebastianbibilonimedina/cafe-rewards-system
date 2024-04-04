const express = require('express');
const router = express.Router();
const RewardController = require('../rewards/rewardsController');

router.get('/', RewardController.getAll);
router.get('/:id', RewardController.getOne);
router.post('/', RewardController.create);
router.put('/:id', RewardController.update);
router.delete('/:id', RewardController.delete);

module.exports = router;