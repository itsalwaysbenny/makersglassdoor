const bcrypt = require('bcryptjs');
const knex = require('./../db/knex');
// console.log('THIS IS IN -HELPERS', knex);

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req) {
  console.log('IN HELPERS')
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return knex('users')
  .insert({
    email: req.body.email,
    name: req.body.name,
    password: hash,
    current_position: req.body.current_position
  })
  .returning('*');
}

module.exports = {
  comparePass,
  createUser
};
