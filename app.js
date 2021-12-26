var express = require ('express');
var path = require('path');
var bodyParser = require ('body-parser');
var nodeMailer = require ('nodemailer');

var app = express ();

// setting up a templating engine to render views
// view engine used https://jade-lang.com/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.render('index');
});
app.listen(3001);
console.log('Server is running on port 3001');