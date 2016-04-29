// var key = require('../../config/env/development.js');
var request = require('request');
// Define the routes module' method
module.exports = function(app) {

  var apiRouter = express.Router();

  // get /weather info
  apiRouter.get('/weather', function(req, res) {
      request("http://api.wunderground.com/api/7d2b1a4095dd9a10/geolookup/conditions/q/IA/Cedar_Rapids.json", function(error, response, body) {
        console.log(body);
        res.json(body);

      });
    });


  return apiRouter;
};
