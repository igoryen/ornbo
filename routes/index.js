var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ornbo' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Ornbo' });
});

// create GET
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Ornbo' });
});
// create POST
router.post('/create', function(req,res) {
    res.send(req.body);
});

router.get('/users/:id', function(req, res) {
    res.send('show content for user id' + req.params.id);
});

router.get('/added', function(req, res){
    var user = {
        first_name: 'Donald',
        last_name: 'Trump',
        address: 'The White House',
        facebook_friends: '100000000'
    }
    res.render('added', {title: 'User', user: user});
});

router.get('/tasks', function(req, res) {
    res.render('tasks/index', { 
        title: 'Todos index view' 
    });
});


module.exports = router;
