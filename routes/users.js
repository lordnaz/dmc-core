var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    let data = {
        "first_name" : "Muhammad Nazrul Hanif",
        "middle_name" : "",
        "last_name" : "Bin M Harith"

    }
    
    res.send(data);
});

module.exports = router;
