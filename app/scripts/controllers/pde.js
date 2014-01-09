'use strict';

angular.module('pdezengardenApp')
  .controller('PdeCtrl', function($scope, $routeParams, $http) {
      $http.get('data/pdes/' + $routeParams.pdeId + '.json').success(function(data) {
          $scope.pde = data;
        });
    });
