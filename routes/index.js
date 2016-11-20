var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ornbo' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Ornbo' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Ornbo' });
});

router.post('/create', function(req,res) {
    res.send(req.body);
});

router.get('/users/:id', function(req, res) {
    res.send('show content for user id' + req.params.id);
});


module.exports = router;
