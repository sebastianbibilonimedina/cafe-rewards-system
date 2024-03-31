require('dotenv').config();
console.log('DB_DIALECT in test file: ', process.env.DB_DIALECT);

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        pool: {
            max: process.env.DB_POOL_MAX,
            min: process.env.DB_POOL_MIN,
            acquire: process.env.DB_POOL_ACQ,
            idle: process.env.DB_POOL_IDLE
        },
        logging: false
    }
);

module.exports = sequelize;