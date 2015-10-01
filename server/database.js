var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3307,
  database: 'spacetimedb'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  } else {
    console.log('Connected to database as id ' + connection.threadId);
  }
});

module.exports = connection;