var express = require('express');
var router = express.Router();
const knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function Users(){
  return knex('users');
}

function getAll() {
  return Users().select();
}

router.get('/login', (req, res, next) => {
  getAll()
  .then(function(users){
    res.status(200).json(users);
  })
  .catch(function(error){
    next(error);
  });
  res.render('login');
});

//This code we wrote with Mark to test user login
// router.post('/login', (req, res, next) =>{
//
//   //Fake user and password for authentication at the moment as queries as above is not setup yet
//   let fakeUser = {
//     email: 'email@email.com',
//     password: 'password'
//   }
//
//   // Query to database for the email inputed and fetch the "encrypted" password
//   getPassword(req.body.email).then(function(row) {
//     console.log(row);
//     if (req.body.password === fakeUser.password) { // Should be the Password in the database
//       //req.session.cookie = true; //Saving for persisting the session
//       res.redirect('/');
//     } else {
//       console.log('Invalid user credentials');
//     }
//   });
//   // console.log('You just requested the following password' , requestedPassword)
//
//   // Compare the "encrypted" password in the database with the password from the input form - use bcrypt
//
//
// console.log('something here');
// /*
//   if (req.body.password === fakeUser.password) { // Should be the Password in the database
//     req.session.cookie = true; //Saving for persisting the session
//     res.redirect('/');
//   } else {
//     console.log('Invalid user credentials');
//   }*/
// });


module.exports = router;
