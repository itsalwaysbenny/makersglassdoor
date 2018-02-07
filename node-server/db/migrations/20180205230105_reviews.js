
exports.up = function(knex, Promise) {

    return knex.schema.createTable('reviews', function(table){
        table.increments();
        table.string('text').notNullable().unique();
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};
