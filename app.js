var express = require('express');
var bodyParser = require('body-parser');
var _ = require("lodash");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', { name: String, id:Number });
var User = mongoose.model('User', { name: String, email: String, password:String });

var fs = require("fs")
var app = express();

mongoose.connect(process.env.MONGOLAB || 'mongodb://localhost:27017/test01');
app.set('port', (process.env.PORT || 5000));

console.log(`PORT = ${process.env.PORT} MONGO=${process.env.MONGOLAB}`);
console.log(`PORT = ${process.env.PORT} MONGO=${process.env.MONGOLAB } NODE_ENV = ${NODE_ENV}`);

var todos = [];

var jsonData = {name:"vit", age:30};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var items = []
var id = 0;

app.get("/items", function(req,res) {

    var todos = {};

    Todo.find({}, function (err, todos) {
        console.log(todos);
        res.json(todos);
    }).
    limit(25);




});


app.get("/items/:id", function(req,res) {
    var item = _.find(items, {id:req.param.id})

    res.json(item || {});

});


app.post("/items", function(req,res) {
    var item = req.body;


    var todo = new Todo({ name: item.todoName, id: item.id });
    todo.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Todo saved!');
        }
    });
    item.id = todo._id;

    res.json(item);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


