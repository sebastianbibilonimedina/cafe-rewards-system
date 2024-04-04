const bcrypt = require('bcrypt');
const User = require('../users/usersModel'); // Ensure the path is correct
const saltRounds = 10;

class UserController {

    async getAll(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async getOne(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async create(req, res) {
        try {
            const { name, email, password, pointbalance } = req.body;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = {
                name,
                email,
                password: hashedPassword,
                pointbalance,
            };

            const user = await User.create(newUser);
            res.status(201).json({ message: "User created successfully", userId: user.userid });
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    }

    async update(req, res) {
        try {
            const updates = req.body;
            if (updates.password) {
                updates.password = await bcrypt.hash(updates.password, saltRounds);
            }
            await User.update(updates, { where: { userid: req.params.id } });
            res.send('User updated');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async delete(req, res) {
        try {
            await User.destroy({ where: { userid: req.params.id } });
            res.send('User deleted');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new UserController();
