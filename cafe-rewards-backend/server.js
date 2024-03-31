const request = require('supertest');
const app = require('./app'); // path to your app.js file. Adjust as needed.

describe('Database and route tests', function() {
    // change "before" to "beforeEach"
    beforeEach(function(done) {
        this.timeout(5000); // set a time limit for the request to be resolved.
        request(app)
            .get('/testdb')
            .expect(200, done);
    });

    it('gets data from /data endpoint', function(done) {
        request(app)
            .get('/testdb') // replaced '/data' with '/testdb'
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                console.log(res.body);
                done();
            });
    });

    // Add more tests as needed
});