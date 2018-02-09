
exports.up = function(knex, Promise) {

  return knex.schema.createTable('companies_users', function(table) {
    //company_id('cid') from companies table references user_id ('id')from table users
      table.increments('c_u_id').primary();
      table.integer('cid').references('companies.cid');
      table.integer('uid').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies_users');
};
