var pkgjson = require('./package.json');
var excfg = pkgjson.expressConfig;
var express = require('express');
var app = express();

// all environments
app.configure(function(){
  app.set('title', 'My Application');
})


/*
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
*/

if (process.env.NODE_ENV == 'prod' || 'prod' == process.argv[2]) {
	// production only
	process.env.NODE_ENV = 'prod'; //does this affect anything?
	app.use(express.static(__dirname + '/public'));
	//console.log(process.env.NODE_ENV);
	//console.log(process.env);
}
else {
	// development only
	app.configure('development', function(){
	  app.use(express.directory(__dirname));
	  app.use(express.static(__dirname));
	})
}

app.listen(excfg.port);
console.log('Express server listening on port '+excfg.port);

