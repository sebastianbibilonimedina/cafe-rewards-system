require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect()
    .then(() => {
        console.log('Connected successfully to the database.')
    })
    .catch(e => {
        console.error('Failed to establish a database connection. Ensure your database is running and the environment variables are set correctly.', e.stack);
    });

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_PORT:', process.env.DB_PORT);

const userRoutes = require('./models, controllers and routes/users/usersRouter');

// const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const authRoutes = require('./routes/authRoutes');
// const paymentRoutes = require('./routes/paymentsRoutes');
// const rewardsRoutes = require('./routes/rewardsRoutes');
// const shopsRoutes = require('./routes/shopsRoutes');
// const transactionsRoutes = require('./routes/transactionsRoutes');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`A ${req.method} request received at ${new Date().toLocaleTimeString()} on ${req.url}`);
    next();
});

app.use('/api/users', userRoutes); // changed from '/api/user' to '/api/users' for consistency

// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/payments', paymentRoutes);
// app.use('/api/rewards', rewardsRoutes);
// app.use('/api/shops', shopsRoutes);
// app.use('/api/transactions', transactionsRoutes);

app.get('/', (req, res) => {
    res.send('Café Rewards PR Backend is running...');
});

app.get('/testdb', async (req, res) => {
    try {
        const testResult = await pool.query('SELECT NOW()');
        res.json(testResult.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;