var express = require('express'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser');


module.exports = function(app, config){
	app.set('views',config.rootPath + '/server/views');
	app.set('view engine', 'ejs');

	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(session({secret: 'coding academy unicorns',resave:false,saveUninitialized:false}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(bodyParser.json());
	app.use(express.static(config.rootPath + '/public'));
}