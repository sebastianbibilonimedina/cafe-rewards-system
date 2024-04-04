require('dotenv').config(); // this line loads env configuration
const Sequelize = require('sequelize');
const db = {};

/*
global.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
});
 */

global.sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

// Here you need to require each model
const Owners = require('./owners/ownersModel');
const Users = require('./users/usersModel');
const Coffeeshops = require('./coffeeshops/coffeeshopsModel');
const DigitalWallets = require('./digitalwallets/digitalwalletsModel');
const Menus = require('./menus/menusModel');
const Rewards = require('./rewards/rewardsModel');
const Orders = require('./orders/ordersModel');
const Transactions = require('./transactions/transactionsModel');

// Include the models in the db object
db.Owners = Owners;
db.Users = Users;
db.Coffeeshops = Coffeeshops;
db.DigitalWallets = DigitalWallets;
db.Menus = Menus;
db.Rewards = Rewards;
db.Orders = Orders;
db.Transactions = Transactions;

// Run .associate, if it exists, on each model
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = global.sequelize;
db.Sequelize = Sequelize;

module.exports = db;