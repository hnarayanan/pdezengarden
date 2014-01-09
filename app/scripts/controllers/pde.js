'use strict';

angular.module('pdezengardenApp')
  .controller('PdeCtrl', function ($scope, $routeParams) {
      $scope.pdeId = $routeParams.pdeId;
    });
