const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Authenticate a user and return a token
router.post('/login', authController.login);

// Register a new user account
router.post('/register', authController.register);

module.exports = router;
