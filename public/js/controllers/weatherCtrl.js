angular.module('weatherCtrl', [])

.controller('weatherCtrl', function($rootScope, $location, weatherService){

      var vm = this;
      vm.message = "FUCK";
      weatherService.get().success(function(data){

        // parse json data into js object
        var data = JSON.parse(data);
        vm.city = data.location.city;
        vm.image = data.current_observation.image.url;
        vm.temp = data.current_observation.temp_f;
        vm.wind = data.current_observation.wind_mph;
        vm.wind_dir = data.current_observation.wind_dir;
        
      })
});
