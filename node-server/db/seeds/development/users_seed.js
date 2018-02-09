
exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        email: 'T1@t1.com',
        name: 'T1',
        password: 'test',
        current_position: 'testerone'
      });
    }).then(function () {
      return knex('users').insert({
        email: 'T2@t2.com',
        name: 'T2',
        password: 'test2',
        current_position: 'testertwo'
      });
    }).then(function () {
      return knex('users').insert({
        email: 'T3@t3.com',
        name: 'T3',
        password: 'test3',
        current_position: 'testerT3'
      });
    }).then(function () {
      return knex('users').insert({
        email: 'T4@t4.com',
        name: 'T4',
        password: 'test4',
        current_position: 'testerT4'
      });
    });
};
