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

describe('GET /users/login', function(){
  it('should return all users', function(done) {
    chai.request(server)
    .get('/users/login')
    .end(function(err, res) {
      done();
    });
  });
});


// describe('POST/users/login', () => {
//     it('should login the user', done => {
//         chai.request(server)
//           .post('/users/login')
//           .send({
//             email: 'email@email.com',
//             password: 'password'
//           })
//           .end((err, res) => {
//             // console.log(res);
//             res.should.have.status(302);
//             //   res.should.be.json
//             // res.body.should.be.a('object');
//             // res.body.should.have.property('email');
//             // res.body.should.have.property('password');
//               done();
//           });
//     });
//     it('should not login the user with invalid credentials');
// });
