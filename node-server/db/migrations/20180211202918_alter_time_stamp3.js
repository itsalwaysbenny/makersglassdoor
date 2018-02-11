

exports.up = function(knex, Promise) {
    return knex.schema.alterTable('reviews', function(table) {
        // drops previous default value from column, change type to string and add not nullable constraint
        table.renameColumn('reviewDate', 'created_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};



