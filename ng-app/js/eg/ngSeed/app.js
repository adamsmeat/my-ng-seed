'use strict';

// Declare app level module which depends on filters, and services
angular.module('ngSeed', ['ngSeed.filters', 'ngSeed.services', 'ngSeed.directives', 'ngSeed.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'tpl/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'tpl/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
