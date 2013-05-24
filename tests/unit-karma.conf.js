// Karma configuration
// Generated on Thu May 23 2013 06:05:47 GMT+0800 (Taipei Standard Time)


// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  // libs
  'ng-app/js/lib/angular/angular.js',
  'ng-app/js/lib/angular/angular-*.js',
  'tests/lib/angular/angular-mocks.js',
  // our own reusable libs and app/business code
  'ng-app/js/my/**/*.js',
  'ng-app/js/src/**/*.js',
  // ng examples
  'ng-app/js/eg/**/*.js',
  // unit tests in tdd
  'tests/unit/**/*.js',
  // templates
  //'ng-app/tpl/**/*.html'
];

// list of files to exclude
preprocessors = [
  //'ng-app/tpl/*.html': 'html2js'
];

// list of files to exclude
exclude = [
  '**/*.swp'
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

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
//singleRun = false;
