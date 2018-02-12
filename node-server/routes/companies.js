var express = require('express');
var router = express.Router();

/* GET companies page. */
router.get('/', function(req, res, next) {

    res.json([{
        id: 1,
        name: "acme1"
    }, {
        id: 2,
        name: "acme2"
    }]);
});

module.exports = router;
