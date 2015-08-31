var express = require('express');
var eventController = require('./event.controller.js');

var events = express.Router();

events.get('/', function(req, res){
  eventController.getRecent(req, res);
});

events.post('/', function(req, res){
  eventController.create(req, res);
});

module.exports = events;