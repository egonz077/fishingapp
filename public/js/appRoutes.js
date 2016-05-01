angular.module('appRoutes', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');

  $stateProvider

  .state('trips', {
    url:'/logger',
    templateUrl: "views/pages/trips.html",

  })

  .state('weather', {
    url:'/weather',
    templateUrl: "views/pages/weather.html",
		 controller: "weatherCtrl",
		 controllerAs: "wctrl"

  })
	.state('home', {
    url:'/',

  })

  $locationProvider.html5Mode(true);
});
