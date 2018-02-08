const usersData = require('../../../data/users'); //merchants
const reviewsData = require('../../../data/reviews'); //products

exports.seed = function(knex, Promise) {
    return knex('reviews').del()
        .then(()=> {
            return knex('users').del();
    })
    .then(()=>{
        return knex('users').insert(usersData);
    })
    .then(()=>{
       let reviewsPromises = [];
       reviewsData.forEach((review)=>{
           let user = review.user;
           reviewsPromises.push(createReview(knex,review,user));
       });
       return Promise.all(reviewsPromises);
    });
};


const createReview = (knex, review,user) => {
    return knex('users').where('email', user).first()
        .then((userRecord)=>{
            return knex('reviews').insert({
                text: review.text,
                user_id: userRecord.id
            });
    });
};