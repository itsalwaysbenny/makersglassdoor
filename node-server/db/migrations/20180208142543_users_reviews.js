
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', (table)=>{
            table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('current_position').notNullable();
        }),
    knex.schema.createTable('reviews', (table)=> {
        table.increments('id').primary();
    table.string('text');
    table.integer('user_id').references('users.id');
    })
]);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
        .dropTable('reviews');
};
