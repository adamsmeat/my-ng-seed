@echo off
rem Windows script for running http server using nodejs (http://nodejs.org/)
set BASE_DIR=%~dp0
cd ../
echo -------------------------------------------------------------------
echo Started serving the project directory. Ctrl-C to stop.
echo -------------------------------------------------------------------
node "%BASE_DIR%http.js" %*