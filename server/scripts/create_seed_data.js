var connection = require('../database');

var migrations = [];

migrations.push("DROP TABLE IF EXISTS events;")

migrations.push('CREATE TABLE `events` (' +
  '`uid` INT(11) NOT NULL AUTO_INCREMENT,' +
  '`title` VARCHAR(255) NOT NULL,' +
  '`date` DATE NOT NULL,' +
  '`time` TIME NOT NULL,' +
  '`location` VARCHAR(255) NOT NULL,' +
  '`description` VARCHAR(255) NOT NULL,' +
  '`host_name` VARCHAR(255) NOT NULL,' +
  'PRIMARY KEY (`uid`)' +
  ') DEFAULT CHARSET=utf8;');
	
migrations.push("INSERT INTO events" +
	"(title, date, time, location, description, host_name)" + 
	"VALUES " +
	"('Silent Disco Dance Party',	'2015-09-03',	'21:00',	'Alamo Square Park',	'Get your boogie on.', 														'Jared')," + 
	"('Movie Night', 							'2015-10-01',	'20:30',	'UN Civic Center', 		'Come watch a classic with #strangerFriends!', 		'Michael')," +
  "('Least Fave Book Salon',    '2015-10-10', '11:30',  '16th Mission BART',  'Read the worst among the foot traffic.',         'Heather')," +
  "('Wild Things Coronation',   '2015-10-15', '22:45',  'Embarcadero',        'Dress up for a rumpus!',                         'Rainbow')"
);

migrations.forEach(function(sqlQuery) {
	connection.query(sqlQuery);
});

connection.end();