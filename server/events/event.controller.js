// var eventSeed = require('./event.seed.js').event_data;
var eventModel = require('./event.model.js');

exports.getRecent = function(req, res){
  eventModel.getRecent(function(dbEventResults){
    res.send(dbEventResults);
  });
};

exports.create = function(req, res){
  console.log('Data received:', req.body);
  eventModel.create(req.body, function(error, result){
    if (error) {
      res.status(400).send(error);
    } else {
      res.send(result);
    }
  	
  });
};