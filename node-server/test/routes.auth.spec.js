process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../app');
const knex = require('../db/knex');

// describe 'API Routes'
describe('routes : auth', () => {

  // beforeEach(() => {
  //   return knex.migrate.rollback()
  //   .then(() => {return knex.migrate.latest()
  //     .then(() => {
  //       return knex.seed.run()
  //       .then(() => {
  //         done();
  //       });
  //      });
  //     });
  //   });
  //
  // afterEach(() => {
  //   return knex.migrate.rollback()
  //   .then(() => {
  //     dome();
  //   });
  });

describe('POST /auth/register', () => {
  it('should register a new user', (done) => {
    chai.request(server)
    .post('/auth/register')
    .send({
      email: 'T2@t2.com',
      name: 'test',
      password: 'test',
      current_position: '2'
    })
    .end((err, res) => {
       console.log('RESPONSE IN TESTS', err);
      // should.not.exist(err);
      // res.redirects.length.should.eql(0);
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      res.body.status.should.eql('success');
      done();
    });
  });
 });
