var express = require('express');
var http = require('http');

var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index.html');
});

app.configure('development', function() {
	
	// live reload script
	
	var liveReloadPort = settings.liveReload.port || 35729;
	var excludeList = ['.woff', '.flv'];

	app.use(require('connect-livereload')({
	port: liveReloadPort,
	excludeList: excludeList
	}));
	
});

app.use(express.static(__dirname));

http.createServer(app).listen(liveReloadPort);