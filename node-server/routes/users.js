var express = require('express');
var router = express.Router();
var database = require('../models/database');

console.log("DATABASE*******", database);

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  var testKnex =  database.select('name', 'email', 'current_position').from('users')
console.log("1&&&&&&&&&",testKnex);

    database('users').select('name').then(function(response){
        //do something here
        // console.log(projectNames);
       return res.json(response);
    });


    // And insert something like this instead:
    // res.json([{
    //     id: 1,
    //     username: "J0hn213"
    // }, {
    //     id: 2,
    //     username: "D0loresH4ze"
    // }]);
});

module.exports = router;
