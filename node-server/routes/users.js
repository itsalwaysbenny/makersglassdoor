var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res, next) =>{

  // queries.add(req.body)
  //   .then(function(showId){
  //     return queries.getSingle(showId);
  //   })
  //   .then(function(show){
  //     res.status(200).json(show);
  //   })
  //   .catch(function(error){
  //     next(error);
  //   });
  // //Fake user and password for authentication at the moment as queries as above not setup
  let fakeUser = {
    user: 'user'
  };
  let fakePassword = {
    password: 'password'
  };

  if (req.body.password === user.password) {
    req.session.user = user; //Saving for persisting the session
    res.redirect('/');
  } else {
    console.log('Invalid user credentials');
  }
});

module.exports = router;
