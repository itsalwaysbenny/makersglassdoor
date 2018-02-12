
exports.up = function(knex, Promise) {
  return knex.schema.table('companies', function(table) {
  // drops previous default value from column, change type to string and add not nullable constraint
  table.dropColumn('review_id');
  table.dropColumn('user_id');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
