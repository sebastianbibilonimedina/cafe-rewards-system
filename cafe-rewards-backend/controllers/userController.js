const User = require('../models').User; // Adjust the path as necessary based on your project structure

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { email, password, name, pointBalance, role } = req.body;
        const user = await User.create({ email, password, name, pointBalance, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single user by ID
exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).send('User not found.');
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user's details
exports.updateUser = async (req, res) => {
    try {
        const { email, password, name, pointBalance, role } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).send('User not found.');

        await user.update({ email, password, name, pointBalance, role });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).send('User not found.');

        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
