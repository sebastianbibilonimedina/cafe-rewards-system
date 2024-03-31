require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Configure pool using environment variables or fallback values
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'cafedb',
    password: process.env.DB_PASSWORD || 'Capstone',
    port: process.env.DB_PORT || 5432,
});

// Connect to the database
pool.connect()
    .then(() => console.log('Connected successfully to the database.'))
    .catch(e => console.error('Failed to connect to the database.', e.stack));

// Import routes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const rewardsRoutes = require('./routes/rewardsRoutes');
const shopsRoutes = require('./routes/shopsRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');

// Middleware to parse the JSON body of incoming requests
app.use(express.json());

// Log requests
app.use((req, res, next) => {
    console.log(`A ${req.method} request received at ${new Date().toLocaleTimeString()} on ${req.url}`);
    next();
});

// Define routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes); // changed from '/api/user' to '/api/users' for consistency
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/rewards', rewardsRoutes);
app.use('/api/shops', shopsRoutes);
app.use('/api/transactions', transactionsRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Café Rewards PR Backend is running...');
});

// Database connection test endpoint
app.get('/testdb', async (req, res) => {
    try {
        const testResult = await pool.query('SELECT NOW()');
        res.json(testResult.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the app for testing
