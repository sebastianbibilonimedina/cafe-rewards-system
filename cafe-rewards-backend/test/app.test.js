const sequelize = require('../config/config'); // Replace with actual path
const { User } = require('../models'); // Import the user model
require('dotenv').config({ path: '.env' });

describe('User model', () => {
    /* Before any tests run, clear the database and reseed it. */
    beforeAll(async () => {
        await sequelize.sync({ force: true });   // This will erase the whole database. Be sure to use a different database for tests.
    });

    test('create user', async () => {
        const user = await User.create({
            username: 'testUser',
            email: 'testuser@example.com',
            password: 'strongpassword123'
        });

        /* Basic tests for User creation. */
        expect(user.username).toBe('testUser');
        expect(user.email).toBe('testuser@example.com');
    });

    /* After all tests have completed, close the database connection. */
    afterAll(async () => {
        await sequelize.close();
    });
});