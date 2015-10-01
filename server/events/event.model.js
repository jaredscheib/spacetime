var mysql = require('mysql');
var db = require('../database.js');

exports.getRecent = function(next) {
  db.query("SELECT * FROM events WHERE date > NOW()", function(error, results, fields){
    console.log('Retrieved from db', results);
    next(results);
  });
};

exports.create = function(event) {
  var eventFields = "'" + event.title + "', " + "'" + event.date + "', " + "'" + event.time + "', " +
                    "'" + event.loc + "', " + "'" + event.desc + "', " + "'" + event.host + "'";
  console.log('Received event:', eventFields);
  db.query("INSERT INTO events (title, date, time, location, description, " +
           "host_name) VALUES (" + eventFields + ")", function(error, results, fields){
    console.log('Saved to db:', results);
  });
};