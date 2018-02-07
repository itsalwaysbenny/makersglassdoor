var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
    knex('users').select('name').then(function(response){
        return res.json(response);
    });
});

module.exports = router;
