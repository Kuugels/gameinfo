const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
var Game = require('./api/models/gamesModel')

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://palikka:SuperPalikka123@ds243418.mlab.com:43418/gamesdb');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var routes = require('./api/routes/gamesRoutes'); //importing route
routes(app); //register the route

app.set('view engine', 'ejs');

// Set port
app.set('port', (process.env.PORT || 5000));

// Specify directory for static content
app.use(express.static(__dirname + '/public'));

// Index page
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
