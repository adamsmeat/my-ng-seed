(function() {
  define(['angular'], function(angular) {
    return angular.module('ngSeed/services', [])
    .value('version', '0.1');
  });
}).call(this);