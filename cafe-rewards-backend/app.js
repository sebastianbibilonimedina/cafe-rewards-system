require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();

// Use environment variables or fallback to hardcoded values
const pool = new Pool({
    user: process.env.DB_USER || 'cafeman',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'cafe_rewards',
    password: process.env.DB_PASSWORD || 'cafepass',
    port: process.env.DB_PORT || 5432,
});

// Attempt to connect to the database
pool.connect()
    .then(() => console.log('Connected successfully to the database.'))
    .catch(e => console.error('Failed to connect to the database.', e.stack));

app.get('/', (req, res) => {
    res.send('Café Rewards PR Backend is running...');
});

// Endpoint to test database connection
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
