const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Adjust the path as necessary

// Register a new user
router.post('/', userController.createUser);

// Retrieve a list of users
router.get('/', userController.getAllUsers);

// Get a specific user's details
router.get('/:id', userController.getUser);

// Update a user's details
router.put('/:id', userController.updateUser);

// Remove a user from the system
router.delete('/:id', userController.deleteUser);

module.exports = router;
