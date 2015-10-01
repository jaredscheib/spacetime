// var eventSeed = require('./event.seed.js').event_data;
var eventModel = require('./event.model.js');

exports.getRecent = function(req, res){
  eventModel.getRecent(20, function(results){
    res.send(results);
  });
};

exports.create = function(req, res){
  console.log('Data received:', req.body);
  eventModel.create(req.body);
};