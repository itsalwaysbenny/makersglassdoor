process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('GET /users', function(){
    it('should return status 200 when going to /users URL', function(done){
        chai.request(server)
            .get('/users')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });
});

describe('GET /companies', function(){
    it(' return 200', function(done){
        chai.request(server)
            .get('/companies')
            .end(function(err,res){
                res.should.have.status(200);
                res.body[0].should.have.property('name');
                done();
        });
    });
});