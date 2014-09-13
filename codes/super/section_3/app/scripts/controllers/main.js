'use strict';

/**
 * @ngdoc function
 * @name section3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the section3App
 */
angular.module('section3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
