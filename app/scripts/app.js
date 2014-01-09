'use strict';

angular.module('pdezengardenApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pdes', {
        templateUrl: 'views/garden.html',
        controller: 'MainCtrl'
      })
      .when('/pdes/:pdeId', {
        templateUrl: 'views/pde.html',
        controller: 'PdeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/pdes'
      });
  });
