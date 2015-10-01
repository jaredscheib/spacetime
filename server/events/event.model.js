var mysql = require('mysql');
var db = require('../database.js');

exports.getRecent = function(num) {
  num = num || 20;
  return db.query("SELECT * FROM events LIMIT " + num.toString(), function(error, results, fields){
    return results;
  });
};

exports.create = function(event) {
  console.log('received event:', event);
  // var eventFields = "'" + event.title + "'";
  // db.query("INSERT INTO events (title, date, time, location, description,
    // host_name) VALUES (" + eventFields + ")", function(error, results, fields));
};