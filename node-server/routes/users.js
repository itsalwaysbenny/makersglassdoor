var express = require('express');
var router = express.Router();
const knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Querying
function getPassword(formEmail){
  return knex('users').where('email', formEmail).select('password');
}

router.get('/login', (req, res) => {
  // console.log(users);
  // users = getAllUsers();
  // console.log(users);
  res.render('login');
});

router.post('/login', (req, res, next) =>{

  //Fake user and password for authentication at the moment as queries as above is not setup yet
  let fakeUser = {
    email: 'email@email.com',
    password: 'password'
  }

  // Query to database for the email inputed and fetch the "encrypted" password
  getPassword(req.body.email).then(function(row) {
    console.log(row);
    if (req.body.password === fakeUser.password) { // Should be the Password in the database
      //req.session.cookie = true; //Saving for persisting the session
      res.redirect('/');
    } else {
      console.log('Invalid user credentials');
    }
  });
  // console.log('You just requested the following password' , requestedPassword)

  // Compare the "encrypted" password in the database with the password from the input form - use bcrypt


console.log('something here');
/*
  if (req.body.password === fakeUser.password) { // Should be the Password in the database
    req.session.cookie = true; //Saving for persisting the session
    res.redirect('/');
  } else {
    console.log('Invalid user credentials');
  }*/
});

module.exports = router;
