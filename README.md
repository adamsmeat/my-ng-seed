# ng-app-seed

Just another angular(1.1.4) seed app ready for tests.

### Installation

Run 'npm install' in root to install expressjs, grunt contribs, etc

### Requirements

1. [NodeJS](http://nodejs.org/)
	- js server scripts, used for serving http, build utilities, etc. 
2. [ExpressJS](https://github.com/visionmedia/express)
  - http server api/framework
3. [Karma](http://karma-runner.github.io/)
	- test runner

### Procedures

1. Make sure grunt-cli is installed in nodejs, run 'npm install' in root. This will install expressjs, grunt and any other modules necessary for the project
2. grunt start-dev - start developing
3. grunt publish to create public directory
4. Use command line to start an http server if needed

### Server

Start an http server either a simple one using 'Scripts' or 'ExpressJS'

#### Scripts

- Run /scripts/startdevserv when developing
- Run /scripts/unit-testrunner for tdd development
- Run /scripts/e2e-testrunner for e2e test

#### Environments

We want to use 2 envs. 'development', by default, should be used when doing dev. Set env to 'prod' when you need http to listen on your webroot, which is '/public' by default.

dev: run 'node server.js'
prod: run 'node server.js prod' or 'NODE_ENV=prod node server.js'

#### ExpressJS

Use your package.json to set keys that will be passed to ExpressJS.
```
{
  ...,
  "expressConfig": {
    "port": 3000,
    "env": {
      "prod": {
        "webroot": "public"
      }
    }
  }
}
```

### File System

1. ng-app/ - contains all code that will later be published publicly possibly on a '/public' folder
2. ng-app/js/lib - all vendor/third-party code libraries
3. ng-app/js/my - our own reusable libraries
4. ng-app/js/src - app business code
5. ng-app/js/eg - angular examples

### Tests

1. TDD - script: /tdd-karma.(bat|sh), karma-conf: /tests/tdd-karma.conf.js
2. End-to-end - script: /e2e-karma.(bat|sh), karma-conf: /tests/e2e-karma.conf.js

### Components/Vendors

1. [angular-1.1.4](https://github.com/angular/angular.js)
2. [bootstrap-2.3.2](https://github.com/twitter/bootstrap)
3. [jquery-1.9.1](https://github.com/jquery/jquery)
4. [require-2.1.6](https://github.com/jrburke/requirejs)
4. [modernizr-2.6.2](https://github.com/Modernizr/Modernizr)

### DNA

The frontend ancestor based on components required by the project then modified by the builder(grunt)

Should initially have the following:

1. index.html

2. 404.html

3. icons
  - apple-touch-icon-114x114-precomposed.png
  - apple-touch-icon-144x144-precomposed.png
  - apple-touch-icon-57x57-precomposed.png
  - apple-touch-icon-72x72-precomposed.png
  - apple-touch-icon-precomposed.png
  - apple-touch-icon.png
  - favicon.ico

4. folders
  - css/
  - img/
  - js/
  - less/
  - tpl/

5. others
  - humans.txt
  - robots.txt

### Grunt (https://github.com/gruntjs/grunt)

Visit above site to install grunt-cli globally 'npm install -g grunt-cli'. Thereafter, you may proceed. Below are the tasks handled after grunt-cli installation.

1. Installation of modules needed in the tasks managed/run by grunt. The included package.json will identify these dependencies. e.g. see below:

```json
{
  "name": "my-ng-seed",
  "version": "0.0.0",
  "dependencies": {},
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-copy": "~0.4.1",
    "grunt-contrib-coffee": "~0.4.0",
    "grunt-contrib-requirejs": "~0.4.0"
  }
}
```
