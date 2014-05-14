var express = require('express'),
   fs = require('fs'),
   routes = require('./routes'),
   user = require('./routes/user'),
   mongoose = require('mongoose')
   http = require('http'),
   csv = require('csv'),
   path = require('path');
var records = new Array();
var app = express();
var records = [];
mongoose.connect('mongodb://localhost/IS217');

mongoose.model('quotes', {price: String});

var Schema = new mongoose.Schema({
    
    screen: String,
    drive: String,
    memory: String
});



app.configure(function () {
   app.set('port', process.env.PORT || 3000);
   app.set('views', __dirname + '/views');
   app.set('view engine', 'jade');
   app.use(express.favicon());
   app.use(express.logger('dev'));
   app.use(express.bodyParser());
   app.use(express.methodOverride());
   app.use(app.router);
   app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
   app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/quotes', function(req,res)
{
    mongoose.model('quotes').find(function(err,quotes)
    {
        res.send(quotes);
    });
});
app.get('/users', user.list);

app.get('/', function(req, res){
        quote.find({},function(err, docs){
                res.send('index',{docs:docs});
        });
        //res.send('test');
});

var quote = mongoose.model('Quote', Schema);

app.post('/new', function(req, res){
	new quote({
		screen    : req.body.screen,
		drive: req.body.drive,
		memory   : req.body.memory				
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.redirect('/');
	});
});


http.createServer(app).listen(app.get('port'), function () {
   console.log("Express server listening on port " + app.get('port'));
});
