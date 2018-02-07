exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('reviews').del()
        .then(function() {
                return knex('users').del()
                    .then(function () {
                        // Inserts seed entries
                        return knex('users').insert({
                            email: 'johnsmith@email.com',
                            name: 'John Smith',
                            password: 'totallySecret',
                            current_position: "javascript junior dev"
                        });
                    })
                    .then(function () {
                        return knex('users').where('email', 'johnsmith@email.com')
                    })
                    .then(function (response) {
                        return knex('reviews').insert({
                            text: 'very challenging but worth it',
                            user_id: response[0]['id']
                        });
                    });
            }
        )
};