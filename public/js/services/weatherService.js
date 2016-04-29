angular.module('weatherService', [])

      .factory('weatherService', function($http){

        //create factory object
        var weatherFactory = {};

        //make a get call to the api
        weatherFactory.get = function(){
              return $http.get('api/weather/');
        };

        // return entire object
        return weatherFactory;
      });
