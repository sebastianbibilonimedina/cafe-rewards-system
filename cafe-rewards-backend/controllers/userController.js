const User = require('../models/user');

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });
    console.log("New user registered: ", newUser);
    res.send("User registration successful");
};

exports.loginUser = (req, res) => {
    // login code...
    res.send("User login successful");
};