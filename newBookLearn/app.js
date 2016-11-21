// MAKE THIS APP GREAT AGAIN!!

var exp = require('express'); //not include dir here means look in node_modules
var app = exp(); //instantiates express
var path = require('path'); //internal node tool for directories (reading from OS cur/other directories)
var bparse = require('body-parser'); //reads JSON structures for processing
var fs = require('fs'); //used for file system I/O

var routes = require('./routes/index'); //pointes to routing index file

app.use(bparse.json());
app.use(bparse.urlencoded({extended:false}));
app.use(exp.static(path.join(__dirname, 'public'))); //__Dirname current folder app.js in
app.use('/', routes); // defines where the paths to the endpoints are, not the actual endpoint logic
app.use(function(req, res, next){
	var err = new Error("NOT FOUND");
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next){
	res.status(err.status | 500); // if status not set, use 500
	res.json({
		code: err.status,
		name: err.name,
		message: err.message
	})

});

module.exports = app;

//