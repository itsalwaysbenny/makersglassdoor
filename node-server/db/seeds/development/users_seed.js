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
.then(()=>{
        return knex('companies').insert(companiesData);
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
        let companyName = review.company_id;
    reviewsPromises.push(createReview(knex, review, userEmail, companyName));
});
    return Promise.all(reviewsPromises);
});
};


const createReview = (knex, review, userEmail, companyName) => {

    var dataCid =[];
    return knex('companies').where('name', companyName).first()
        .then((data)=>{
        dataCid.push(data.cid);
    return Promise.all(dataCid);
})
.then(()=>{
        return knex('users').where('email', userEmail).first()
            .then((userRecord)=>{
            return knex('reviews').insert({
                text: review.text,
                author_id: userRecord.id,
                company_id: dataCid[0]
            });
})
})
.catch((err)=> console.log(err));
};
