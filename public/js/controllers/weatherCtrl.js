angular.module('weatherCtrl', [])

.controller('weatherCtrl', function($rootScope, $location, weatherService){

      var vm = this;
      vm.message = "FUCK";
      weatherService.get()
      .success(function(data){

        vm.test = data;
      })
});
