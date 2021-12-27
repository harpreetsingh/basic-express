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

app.get('/contact', function(req, res){
    res.render('contact', {title: 'Email BlueOrange Team'});
});

// adding Nodemailer
app.post('/contact/send', function(req, res){
    console.log("In Nodemailer code")
    var transporter = nodeMailer.createTransport(
        {
            service: 'Gmail',
            auth: {
                user: 'username@gmail.com',
                pass: 'password'
            }
    });

    var mailOptions = {
        from: 'User <username@gmail.com>',
        to: 'support@youwebsite.com',
        subject: 'Express website email submission text',
        text: 'You have a submission with the details...Name '+req.body.name+' Email: '+req.body.email+' Message '+req.body.message,
        html: '<p>You have a submission with the details...</p> <ul><li>Name '+req.body.name+
              '</li> <li>Email: '+req.body.email+'</li> <li> Message '+req.body.message+'</li></ul>'
    };
    console.log("About to send email");

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message Sent: '+info.response);
            res.redirect('/');
        }
    });
});
app.listen(3001);
console.log('Server is running on port 3001');