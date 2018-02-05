exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('reviews').del()
        .then(function () {
            // Inserts seed entries
            return knex('reviews').insert({
                text: 'very challenging but worth it'
            });
        }).then(function () {
            // Inserts seed entries
            return knex('reviews').insert({
                text: 'loves every second of it. Awesome!!'
            });
        });
};