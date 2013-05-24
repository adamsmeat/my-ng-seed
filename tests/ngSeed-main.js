var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return /Spec\.js$/.test(file);
});

requirejs.config({

    baseUrl: 'base/js',

    paths: {
        //standard lib includes
        'angular-loader': 'lib/angular/angular-loader',
        angular: 'lib/angular/angular',
    },

    shim: {
        angular: {deps:['angular-loader'], exports: 'angular'}
    },

    deps: tests,  

    //urlArgs: 'bust='+ new Date().getTime(),

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

//remove less if not in dev mode, affix the overall css
requirejs(['angular', 'my/ngSeed/module'], function (angular, ngSeed) {
    "use strict";
    angular.bootstrap(document, ['ngSeed']);
    console.info('Loaded modules');
    console.log('ngSeed:', ngSeed);
});