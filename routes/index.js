var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ornbo' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Ornbo' });
});

module.exports = router;
