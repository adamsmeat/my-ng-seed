// Karma configuration
// Generated on Sat May 25 2013 01:56:38 GMT+0800 (Taipei Standard Time)


// base path, that will be used to resolve files and exclude
basePath = 'ng-app';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  {pattern: 'js/lib/angular/angular-loader.js', included: false},
  {pattern: 'js/lib/angular/angular.js', included: false},
  {pattern: 'js/my/ngSeed/**/*.js', included: false},
  {pattern: '../tests/unit/ngSeed/**/*Spec.js', included: false},
  '../tests/ngSeed-main.js'
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
