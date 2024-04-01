const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app'); // make sure to point to your app file.

describe('Transactions API tests', () => {

    // Test Case for Creating Transaction
    it('should create a new transaction', (done) => {
        request(app)
            .post('/transactions')
            .send({/* sample data for transaction */})
            .end((err, res) => {
                if (err) return done(err);

                expect(res.statusCode).to.equal(201);
                expect(res.body).to.be.an('object');

                // more assertions based on the response

                done();
            });
    });

    // Test Case for Getting All Transactions
    it('should get all transactions', (done) => {
        request(app)
            .get('/transactions')
            .end((err, res) => {
                if (err) return done(err);

                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array');

                // more assertions based on the response

                done();
            });
    });
});