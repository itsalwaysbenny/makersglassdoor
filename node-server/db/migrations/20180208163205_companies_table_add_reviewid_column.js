
exports.up = function(knex, Promise) {
  return knex.schema.table('companies', function(table) {
  // add review id column referncing the id of the review
    table.integer('review_id')
      .references('rid')
      .inTable('reviews')
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
