@echo off
rem Windows script for running e2e test
rem Requires: NodeJS (http://nodejs.org/), Karma (npm install -g karma)
rem You have to run server and capture some browser first
echo -------------------------------------------------------------------
echo Started tdd tests using karma.
echo -------------------------------------------------------------------
set BASE_DIR=%~dp0
karma start "%BASE_DIR%\..\tests\unit-karma.conf.js" %*
