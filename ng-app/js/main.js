requirejs.config({

    baseUrl: 'js',

    paths: {
        //standard lib includes
        'angular-loader': 'lib/angular/angular-loader',
        angular: 'lib/angular/angular',
    },

    shim: {
        angular: {deps:['angular-loader'], exports: 'angular'}
    },   

    urlArgs: 'bust='+ new Date().getTime()
});

//remove less if not in dev mode, affix the overall css
requirejs(['angular', 'my/ngSeed/module'], function (angular, ngSeed) {
    "use strict";
    angular.bootstrap(document, ['ngSeed']);
    console.info('Loaded modules');
    console.log('ngSeed:', ngSeed);
});