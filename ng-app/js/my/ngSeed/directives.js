(function() {
  define(['angular'], function(angular) {
    return angular.module('ngSeed/directives', [])
    .directive('appVersion', ['version', function(version) {
	    return function(scope, elm, attrs) {
	    	elm.text(version);
	    };
	  }]);
  });
}).call(this);
