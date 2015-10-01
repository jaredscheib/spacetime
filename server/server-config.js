var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var db = require('./database');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(__dirname + '/../www'));
app.use(cors());

app.use('/events', require('./events'));

app.use('*', function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = app;