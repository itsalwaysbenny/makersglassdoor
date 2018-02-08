exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
  // drops previous default value from column, change type to string and add not nullable constraint
  table.string('current_position').notNullable().alter();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
