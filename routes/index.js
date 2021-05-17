var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'donatemecrypto.me', linktext: 'https://donatemecrypto.me/', author: 'https://github.com/lordnaz', repo: '' });
});

module.exports = router;
