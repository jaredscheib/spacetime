var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'spacetimedb'
});

connection.connect();

module.exports = connection;