(function(){
  'use strict';

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'angular_files/partials/index.html'
    })
    .when('/offers', {
      templateUrl: 'angular_files/partials/offers.html'
    })
    .otherwise({
      redirectTo:'/'
    })
  }
})()
