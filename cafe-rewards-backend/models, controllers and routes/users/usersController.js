const User = require('../users/usersModel');

class UserController {

    // fetch all users
    async getAll(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    // fetch a user by its id
    async getOne(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) return res.json(user);
            else return res.status(404).send('User not found');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    // create a new user
    async create(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    // update a user
    async update(req, res) {
        try {
            await User.update(req.body, { where: { userid: req.params.id } });
            res.send('User updated');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    // delete a user
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