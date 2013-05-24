requirejs.config({

    baseUrl: 'js',

    paths: {
        tpl: '../tpl',
    },   

    shim: {
        bootstrap: {deps:['jquery']},
        less: {exports: 'less'},
        underscore: {exports: '_'},
        angular: {deps:['angular-loader'], exports: 'angular'},
        modernizr: {exports: 'Modernizr'},
    },   

    urlArgs: 'bust='+ new Date().getTime(),

    someInit: (function(){
        less = {
            env: "development", // or "production"
            async: false,       // load imports async
            fileAsync: false,   // load imports async when in a page under
                                // a file protocol
            poll: 1000,         // when in watch mode, time in ms between polls
            functions: {},      // user functions, keyed by name
            dumpLineNumbers: "comments", // or "mediaQuery" or "all"
            relativeUrls: false,// whether to adjust url's to be relative
                                // if false, url's are already relative to the
                                // entry less file
            //rootpath: "http://ng/new/"// a path to add on to the start of every url resource
        }        
    })()    
});

//remove less if not in dev mode, affix the overall css
requirejs(['my/tpl', 'my/app'], function (tpl, app) {
    "use strict";
    console.info('Initializing...');
    console.log(
        'tpl:', tpl,
        'app:', app        
    );
});