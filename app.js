var express = require ('express');
var path = require('path');
var bodyParser = require ('body-parser');
var nodeMailer = require ('nodemailer');

var app = express ();

// setting up a templating engine to render views
// view engine used https://jade-lang.com/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// using stylesheets
app.use(express.static(path.join(__dirname,'public')));


app.get('/', function(req, res){
    res.render('index', {title: 'BlueOrange'});
});

app.get('/about', function(req, res){
    res.render('about', {title: 'About BlueOrange'});
});

app.listen(3001);
console.log('Server is running on port 3001');