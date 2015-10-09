var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 3307,
  database: process.env.DB_NAME || 'spacetimedb',
  options: {
    encrypt: true
  }
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