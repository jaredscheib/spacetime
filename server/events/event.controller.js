var eventSeed = require('./event.seed.js').event_data;

exports.getRecent = function(req, res){
  // retrieve seed (stub) data without referencing model since haven't set up SQL database yet
  res.send(eventSeed);
};

exports.create = function(req, res){
  // add object to eventSeed array without referencing model since haven't set up SQL database yet
  console.log('Event received:', req.body);
  eventSeed.push(req.body);
  console.log(eventSeed);
};