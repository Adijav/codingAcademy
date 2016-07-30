var passport = require('passport');

exports.authenticate = function(req, res, next){
		console.log("req",req.body);
	req.body.username = req.body.username.toLowerCase();
	var auth = passport.authenticate('local', function(err, user){
		console.log("inside auth",user);
		if(err) {
			return next(err);
		}
		if(!user) {
			res.send({success:false});
		}
		req.logIn(user, function(err){
			console.log("inside logIn",user);
			if(err){
				return next(err);
			}
			//console.log("user in auth",user);
			res.send({success:true, user: user});
		});
	});
	auth(req, res, next);
};

exports.requiresApiLogin = function(req, res, next){
	if(!req.isAuthenticated()){
		res.status(403);
		res.end();
	}
	else {
		next();
	}
};

exports.requiresRoles = function(role){
	return function(req, res, next){
		if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
			res.status(403);
			res.end();
		}
		else {
			next();
		}
	};
};