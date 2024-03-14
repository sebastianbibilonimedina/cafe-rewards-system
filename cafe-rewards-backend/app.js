require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.get('/', (req, res) => {
    res.send('Café Rewards PR Backend is running...');
});

// Test database connection
app.get('/testdb', async (req, res) => {
    try {
        const testResult = await pool.query('SELECT NOW()');
        res.json(testResult.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
