var path = require('path')
express = require('express');
morgan = require('morgan');
compress = require('compression');
bodyParser = require('body-parser');
methodOverride = require('method-override');
session = require('express-session');
pg = require('pg');
app = express()
connectionString = require('./config/config');


 var routes = require('./app/routes/routes')(app, express);
app.use('/api', routes);
console.log(connectionString)

app.use(morgan('dev'))


app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname + '/public/views/index.html'));
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');
