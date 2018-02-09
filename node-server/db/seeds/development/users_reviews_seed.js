const usersData = require('../../../data/users');
const reviewsData = require('../../../data/reviews');
const companiesData = require('../../../data/companies');


exports.seed = function(knex, Promise) {
    return knex('reviews').del()
        .then(() => {
        return knex('users').del();
})
.
    then(() => {
        return knex('companies').del();
})
.
    then(() => {
        return knex('users').insert(usersData);

})
.
    then(() => {
        let reviewsPromises = [];
    reviewsData.forEach((review) => {
        let userEmail = review.author_id;
    reviewsPromises.push(createReview(knex, review, userEmail));
});
    return Promise.all(reviewsPromises);

});
};

const createReview = (knex, review, userEmail) => {

    return knex('users').where('email', userEmail).first()
        .then((userRecord)=>{
        console.log("****$$$$$$");
            return knex('reviews').insert({
                text: review.text,
                author_id: userRecord.id
    });
    });
};

