require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./cafe-rewards-backend/models-controllers-routes');

const app = express();
const port = process.env.PORT || 3000;

// Apply CORS middleware with configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN // make sure this is set in your .env.local file
}));

app.use(express.json());

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // Uncomment below if you want the tables to be created (and possibly dropped if they exist)
        // return db.sequelize.sync();
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const usersRoutes = require('./cafe-rewards-backend/models-controllers-routes/users/usersRouter');
const rewardsRoutes = require('./cafe-rewards-backend/models-controllers-routes/rewards/rewardsRouter');
const transactionsRoutes = require('./cafe-rewards-backend/models-controllers-routes/transactions/transactionsRouter');
const ordersRoutes = require('./cafe-rewards-backend/models-controllers-routes/orders/ordersRouter');
const ownersRoutes = require('./cafe-rewards-backend/models-controllers-routes/owners/ownersRouter');
const menusRoutes = require('./cafe-rewards-backend/models-controllers-routes/menus/menusRouter');
const digitalWalletsRoutes = require('./cafe-rewards-backend/models-controllers-routes/digitalwallets/digitalwalletsRouter');
const coffeeShopsRoutes = require('./cafe-rewards-backend/models-controllers-routes/coffeeshops/coffeeshopsRouter');

app.use((req, res, next) => {
    console.log(`A ${req.method} request received at ${new Date().toLocaleTimeString()} on ${req.url}`);
    next();
});

app.use('/api/users', usersRoutes);
app.use('/api/rewards', rewardsRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/owners', ownersRoutes);
app.use('/api/menus', menusRoutes);
app.use('/api/digitalwallets', digitalWalletsRoutes);
app.use('/api/coffeeshops', coffeeShopsRoutes);

// Error handling middleware should be last piece of middleware used
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;