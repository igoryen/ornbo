var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo_development');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
// #9
var Task = new Schema({
    task: String // #11
});
var Task = mongoose.model('Task', Task); // #10

router.get('/', function(req, res) { // #13
    Task.find({}, function (err, docs){
        res.render('tasks/index', { 
            title: ' Ornbo | Todos index view' ,
            docs: docs // #12 
        });
    });
});

// @4
router.get('/new', function(req,res){ // #13
    res.render('tasks/new.jade', {
        title: 'New Task'
    });
});

//#5
router.post('/', function(req, res){ // #13
    console.log("---->req.body.task: " + req.body.task);
    var task = new Task(req.body.task); // #6
    task.save(function(err){ // #7
        if(!err){
            res.redirect('/tasks'); // #8
        } else {
            res.redirect('/tasks/new');
        }
    });

});

module.exports = router;