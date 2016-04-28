angular.module('appRoutes', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');

  $stateProvider

  //signin page
  .state('trips', {
    url:'/logger',
    templateUrl: "views/pages/trips.html",

  })
  //sign out page
  .state('weather', {
    url:'/weather',
    templateUrl: "views/pages/weather.html",

  })
	.state('home', {
    url:'/',

  })

  $locationProvider.html5Mode(true);
});
