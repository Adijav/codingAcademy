var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
 	User = mongoose.model('User');


module.exports = function(){
	passport.use(new LocalStrategy(function(username, password, done){
		console.log("inside passport.use", username)
		User.findOne({'username':username}).exec(function(err, user){
			if(user && user.authenticate(password)){
				console.log("inside findOne",user);
				return done(null, user);
			}else {
				return done(null, false);
			}

		});
	}));

	passport.serializeUser(function(user, done){
		if(user){
			console.log("passport.serializeUser",user);
			return done(null, user.id);
		}
	});

	passport.deserializeUser(function(id, done){
		User.findOne({_id:id}).exec(function(err, user){
			if(user){
				console.log("passport.deserializeUser",user.id);
				return done(null, user);
			}else {
				return done(null, false);
			}
		});
	});
};