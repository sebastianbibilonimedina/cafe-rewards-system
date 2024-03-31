const { User } = require('../models'); // Asegúrate de que la ruta es correcta
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Configura tu secreto y expiración de JWT según tus necesidades
const jwtSecret = process.env.JWT_SECRET || 'tu_secreto'; // Mejor usar variable de entorno
const jwtExpiresIn = '24h';

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar aquí si deseas (por ejemplo, que el correo no esté vacío, etc.)

        // Crear el usuario
        const user = await User.create({ email, password });

        res.status(201).json({ message: "Usuario creado exitosamente", user });
    } catch (error) {
        console.error("Error de registro:", error);
        res.status(500).json({ message: "Error al registrar usuario" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar el usuario
        const user = await User.findOne({ where: { email } });

        if (!user || !(await user.validatePassword(password))) {
            return res.status(401).json({ message: "Correo o contraseña inválidos" });
        }

        // Generar un token JWT
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: jwtExpiresIn });

        res.json({ message: "Autenticación exitosa", token });
    } catch (error) {
        console.error("Error de autenticación:", error);
        res.status(500).json({ message: "Error al autenticar usuario" });
    }
};
