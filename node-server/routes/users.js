var express = require('express');
var router = express.Router();
var database = require('../models/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

//   var testKnex =  database.select('name', 'email', 'current_position').from('users')
// console.log("1&&&&&&&&&",testKnex);

    database('users').select('name').then(function(response){
       return res.json(response);
    });

});

module.exports = router;
