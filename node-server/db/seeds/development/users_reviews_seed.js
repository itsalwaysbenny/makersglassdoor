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

// .then(()=>{
//
//     let companiesPromises = [];
//     companiesData.forEach((company)=>{
//         console.log("Do I reach here ");
//         let companyName = company.name;
//     companiesPromises.push(createReviewCompany(knex,company, companyName ));
//     })
//     });


//     let companiesPromises = [];
//     reviewsData.forEach((company)=>{
//         let companyName = company.name;
//     companiesPromises.push(createCompany(knex,company,companyName));
// });




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


// const createReviewCompany = (knex, review, companyName) => {
//     return knex('companies').where('name', companyName).first()
//         .then((companyRecord)=>{
//         return knex('reviews').insert({
//             company_id: companyRecord.id
//         });
// });
// };



// const createProduct = (knex, product, merchant) => {
//     return knex(‘merchants’).where(‘name’, merchant).first()
//         .then((merchantRecord) => {
//         return knex(‘products’).insert({
//         name: product.name,
//         price: product.price,
//         merchant_id: merchantRecord.id
//     });
// });
// };

//
// (userRecord)=>{
//     return knex('reviews').insert({
//         text: review.text,
//         author_id: userRecord.id
//     });
// }
// const createCompany = (knex, review,companyName) => {
//     return knex('companies').where('name', companyName).first()
//         .then((companyRecord)=>{
//         return knex('reviews').insert({
//             company_id: companyRecord.id
//         });
// });
// };


