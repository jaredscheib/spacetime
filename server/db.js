var mysql = require('mysql');

var connection = mysql.connection({
  host: 'localhost',
  user: 'root',
  database: 'spacetimedb'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connceting to MySQL database: ' + err.stack);
    return;
  } else {
    console.log('Connected to database as id ' + connection.threadId);
  }
});

connection.query('CREATE TABLE `events` (
  `uid` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,
  `time` TIME NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `host_name` VARCHAR(255) NOT NULL
  ) DEFAULT CHARSET=utf8;');

connection.end();

module.exports = connection;