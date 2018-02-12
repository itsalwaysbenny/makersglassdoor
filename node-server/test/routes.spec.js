process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../db/knex');

const should = chai.should();

chai.use(chaiHttp); // For testing HTTP

describe('GET /users', () => {
    it('should return status 200 when going to /users URL', done => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('GET /users/login', () => {
    it('should return status 200', done => {
        chai.request(server)
            .get('/users/login')
            .end( (err, res) => {
                res.should.have.status(200);
                done();
            });
    })
});