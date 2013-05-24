'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
// adamsmeat: by service, they meant something globally accessible
angular.module('ngSeed.services', []).
  value('version', '0.1');
