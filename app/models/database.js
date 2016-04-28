var pg = require('pg'); // IMPORT DEPENDENCY
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/fishingapp'; // CREDENTIALS

var client = new pg.Client(connectionString);
client.connect(); //CONNECT
var query = client.query('CREATE TABLE trip(id SERIAL PRIMARY KEY, date date, water_temp int , coordinates VARCHAR(40), observations VARCHAR(40) )'); //CREATE TABLES
var query2 = client.query('CREATE TABLE pictures(date date PRIMARY KEY, uri VARCHAR(40))')
query.on('end', function() { client.end(); }); // END QUERY
query2.on('end', function() {client.end(); });
