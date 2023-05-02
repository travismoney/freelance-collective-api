const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const mongoose = require('mongoose');

chai.use(chaiHttp);

const expect = chai.expect;

// MongoDB Connection Test
describe('MongoDB Connection Test', () => {
    it('should connect to MongoDB', async () => {
        try {
            await mongoose.connect(process.env.DB_URL_MONGODB, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
            expect(mongoose.connection.readyState).to.equal(1);
            console.log('MongoDB connected successfully!');
        } catch (err) {
            console.error(err);
        }
    });
});

// Test for GET Single User
describe('GET /api/v1/user/:id', function() {
  it('responds with user data', function(done) {
    chai.request(app)
        .get('/api/v1/user/644da0f82fac6e55945f1123')
        .end(function(err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('skillsets').that.is.an('array');
            expect(res.body).to.have.property('hobbies').that.is.an('array');
            expect(res.body).to.have.property('_id').that.is.a('string').that.equals('644da0f82fac6e55945f1123');
            expect(res.body).to.have.property('username').that.is.a('string');
            expect(res.body).to.have.property('email').that.is.a('string');
            expect(res.body).to.have.property('phoneNumber').that.is.a('string');
            expect(res.body).to.have.property('location').that.is.a('string');
            expect(res.body).to.have.property('linkedInUrl').that.is.a('string');
            expect(res.body).to.have.property('__v').that.is.a('number').that.equals(0);
            done();
        });
    });
});

// Test for GET All Users
describe('GET /api/v1/users', () => {
    it('should return an array of user data objects', (done) => {
        chai
        .request(app)
        .get('/api/v1/users')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body[0]).to.have.property('skillsets').that.is.an('array');
            expect(res.body[0]).to.have.property('hobbies').that.is.an('array');
            expect(res.body[0]).to.have.property('_id').that.is.a('string');
            expect(res.body[0]).to.have.property('username').that.is.a('string');
            expect(res.body[0]).to.have.property('email').that.is.a('string');
            expect(res.body[0]).to.have.property('phoneNumber').that.is.a('string');
            expect(res.body[0]).to.have.property('location').that.is.a('string');
            expect(res.body[0]).to.have.property('linkedInUrl').that.is.a('string');
            expect(res.body[0]).to.have.property('__v').that.is.a('number');
            done();
        });
    });
});