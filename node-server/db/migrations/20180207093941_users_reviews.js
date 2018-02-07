exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('current_position').notNullable();
    }).createTable('reviews', function(table) {
        table.increments('id').primary();
        table.string('text');
        table.integer('user_id').references('users.id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
        .dropTable('reviews');
};