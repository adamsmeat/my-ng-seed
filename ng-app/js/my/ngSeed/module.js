(function() {
	// defining the ngSeed module which needs its subcomponents
	// no need to get the other modules as angular module system just keeps them everything in the angular instance
  define(['angular', 'my/ngSeed/filters', 'my/ngSeed/services', 'my/ngSeed/directives', 'my/ngSeed/controllers'], function (angular) {
    return angular.module('ngSeed', ['ngSeed/filters', 'ngSeed/services', 'ngSeed/directives', 'ngSeed/controllers'])
    	.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'tpl/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'tpl/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    	}]);
  });
}).call(this);
