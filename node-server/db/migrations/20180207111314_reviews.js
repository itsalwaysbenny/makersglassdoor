exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('companies', function(table){
        table.increments('cid').primary();
        table.string('name');
        table.string('address');
        table.string('tech_stack');
        table.string('overview');
        table.integer('review_id')
            .references('rid')
            .inTable('reviews');
        table.integer('user_id')
            .references('id')
            .inTable('users');
    }),
    knex.schema.createTable('reviews', function(table) {
        table.increments('rid').primary();
        table.string('text');
        table.integer('author_id')
            .references('id')
            .inTable('users');
        table.integer('company_id')
            .references('cid')
            .inTable('companies');
        table.dateTime('reviewDate');
    })
  ])
};
exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('companies'),
      knex.schema.dropTable('reviews')
    ])
};

// knex.schema.createTable('comments', funcion(table){
//     table.increments('cid').primary();
//     table.string('body');
//     table.integer('cid')
//         .refernces('id')
//         .inTable('users');
//     table.integer('cid')
//         .references('rid')
//         .inTable('reviews');
// });
