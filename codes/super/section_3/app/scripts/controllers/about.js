'use strict';

/**
 * @ngdoc function
 * @name section3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the section3App
 */
angular.module('section3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
