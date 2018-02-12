
exports.up = function(knex, Promise) {
    return knex.schema.table('companies', function(table) {
        table.dropColumn('review_id');
    });

};

exports.down = function(knex, Promise) {
  
};
