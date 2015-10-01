var mysql = require('mysql');
var db = require('../database.js');

exports.getRecent = function(next) {
  db.query("SELECT * FROM events WHERE date > NOW()", function(error, results, fields){
    next(results);
  });
};

exports.create = function(event, next) {

  var eventFields = "'" + event.title + "', " + "'" + event.date + "', " + "'" + event.time + "', " +
                    "'" + event.loc + "', " + "'" + event.desc + "', " + "'" + event.host + "'";
  var sql = "INSERT INTO events (title, date, time, location, description, host_name) VALUES (" + eventFields + ")";

  console.log(sql);
  
  db.query(sql, function(error, results, fields){
    next(error, results);
  });
};