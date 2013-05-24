define(['my/ngSeed/module', 'my/ngSeed/directives', 'angular'], function (ngSeed, directives, angular) {

	console.log(angular);
  describe('directives', function() {
  	//beforeEach(module('ngSeed/directives'));

    it('true is true', function() {
      expect(true).toEqual(true);
    });
  });

});
