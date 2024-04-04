const express = require('express');
const { body, validationResult } = require('express-validator');
const UserController = require('../users/usersController'); // Adjust the path as needed

const router = express.Router();

// Validation rules for creating a new user
const createUserValidationRules = [
    body('email').isEmail().withMessage('Enter a valid email address.'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
        .matches(/\d/).withMessage('Password must contain a number.')
        .matches(/[!@#$%^&*]/).withMessage('Password must contain a special character.'),
    body('name').not().isEmpty().withMessage('Name is required.'),
    // Add more fields as needed
];

// Function to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Setup routes with validation
router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', createUserValidationRules, handleValidationErrors, UserController.create);
router.put('/:id', UserController.update); // Consider adding validation for updates as well
router.delete('/:id', UserController.delete);

module.exports = router;
