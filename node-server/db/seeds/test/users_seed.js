exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert({
                email: 'johnsmith@email.com',
                name: 'John Smith',
                password: 'totallySecret',
                current_position: "javascript junior dev"
            });
        }).then(function () {
            // Inserts seed entries
            return knex('users').insert({
                email: 'alicewonder@email.com',
                name: 'Alice Wonder',
                password: 'pAssw0rd',
                current_position: "Ruby junior dev"
            });
        });
};