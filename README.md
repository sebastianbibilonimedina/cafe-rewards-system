**Getting Started**

These instructions will provide you with a copy of the project up and running on your local machine for development and testing purposes.

**Prerequisites**

- Node.js v14.x or later
- npm (comes with Node.js installation)

**Installing**

1. Clone the project on your local machine.
2. Go to the project directory.
3. Install the required npm dependencies.

**Configuration**

This project uses dotenv to manage environment variables. Create a `.env.local` file in the root of your project and set any necessary variables (such as your `PORT` and `CORS_ORIGIN`).

**Running the App**

Start the server by running the start command specified in your `package.json` file. Your server should then be running on the specified port, ready to handle requests.

**Features**

This application serves static HTML files located in the `client/html` directory and exposes a number of different API endpoints under the `/api` path. Each endpoint corresponds to a specific route and is connected to a different area of the application, such as users, rewards, transactions, etc.

**Built With**

- Express - A fast, unopinionated, minimalist web framework for Node.js.
- Sequelize - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- cors - A package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- dotenv - A package that loads environment variables from a `.env` file into `process.env`.


**Authors**

- Kevin Pérez
- Sebastian Bibiloni
- Karolyn Pérez
