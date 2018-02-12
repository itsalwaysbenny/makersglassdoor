var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function showCompanies(){
    return knex.select().from('companies')
        .then(function(row){
            console.log('querying Companies', row);
        });

}

/* GET companies page. */
router.get('/', function(req, res, next) {

    // showCompanies();

    res.json([{
        id: 1,
        name: "acme1"
    }, {
        id: 2,
        name: "acme2"
    },
        {
            id: 3,
            name: "facebook"
        },

    {
        id: 4,
            name: "twitter"
    }])

    ;
});

module.exports = router;
