var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function showCompanies(){
    return knex.select().from('companies')
        .then(function(row){
            return row;
        });

}

/* GET companies page. */
router.get('/', function(req, res, next) {

    showCompanies().then((response)=>{
        res.json(response);
    });
});

module.exports = router;
