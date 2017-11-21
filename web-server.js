//express is used for creating a server

var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next ){
		console.log('private route hit!');
		next();
	}, 
	logger: function(req,res, next){
		console.log('Request:'req.method+ ''+ new Date().toString() + '' +req.originalUrl);
		next();
	}
};
app.use(middleware.logger); 

var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		console.log('Request:'req.method + '' + new Date().toString() + '' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		console.log('Request':req.method + '' + new Date().toString()+ '' + req.originalUrl);
	}
}
app.use(middleware.logger);

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit');
		next()
	}
}









//new Date().toString()

//req.originalUrl shows the url which was requested.
//output, get requests starts appearing on commandline
//next tells user to move on. 
//Adding middleware into the app

//app.use(middleware.requireAuthentication); 
//the order u define them is important, ie up top
//When you call app.use your basically calling application__
//level middleware. It gets called on every page



app.get('/', function(req, res){
	res.send('Hello Express');

});
app.listen(3000);
//forward slash is the root directory
//req holds all the info sent by the user, like the url, cookies etc
//the request u make in ur browser is getElementsByTagName('')
//we are using port 3000 as the computer doesn't use it. If it doesthere might be a conflict


var express = require('express');
var app = express();

app.get('/about', fucntion(req, res){
	res.send('About us');
})

app.use(express.static(__dirname + '/public'));

app.listen(3000);
//Express takes two arguements, the first is route. 
//after updating, u need to stop your server and restart your server to see the changes

//Expose a folder in your server
//tell express that we want to expose a whole folder
//When ur using uppercase in JS, youre saying the variable's value shoudln't be changed. It should be constant
//middleware helps you run a specific function for all your routes
//-------------Adding route level middleware---

app.get('/about' middleware.requireAuthentication, function(req, res){
	res.send('About Us');
});
