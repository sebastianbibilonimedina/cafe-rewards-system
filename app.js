require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./server');
const app = express();
const port = process.env.PORT;

const clientHtmlPath = path.join(__dirname, 'client', 'html');

function configureMiddleware() {
    app.use(cors({
        origin: process.env.CORS_ORIGIN // make sure this is set in your .env.local file
    }));
    app.use(express.json());
}

function connectDatabase() {
    db.sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            // Uncomment below if you want the tables to be created (and possibly dropped if they exist)
            // return db.sequelize.sync();
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}

function loadRoutes() {
    const routes = ['users', 'rewards', 'transactions', 'orders', 'owners', 'menus', 'digitalwallets', 'coffeeshops'];

    routes.forEach(route => {
        let routePath = `./server/models-controllers-routes/${route}/${route}Router`;
        app.use(`/api/${route}`, require(routePath));
    });

    // Error handling middleware should be last piece of middleware used
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
}

// Serve static files from the 'client/html' directory
app.use(express.static(clientHtmlPath));
// When a GET request is made to the server, serve the 'index.html' file
app.get('*', (req, res) => {
    res.sendFile(path.join(clientHtmlPath, 'index.html'));
});

app.use((req, res, next) => {
    console.log(`A ${req.method} request received at ${new Date().toLocaleTimeString()} on ${req.url}`);
    next();
});


connectDatabase();
configureMiddleware();
loadRoutes();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;