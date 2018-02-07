
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
        table.increments();
        table.string('email').notNullable().unique();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('current_position').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
