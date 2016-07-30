var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption'),
	crypto = require('crypto');

module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console,'error connecting to database'));
	db.once('open', function callback(){
		console.log('database connected');
	});

	var userSchema = mongoose.Schema({
		firstName: {type:String, required:'{PATH} is required'},
		lastName: {type:String, required:'{PATH} is required'},
		username: {type:String, required:'{PATH} is required', unique:true},
		salt: {type:String, required:'{PATH} is required'},
		hashed_pwd: {type:String, required:'{PATH} is required'},
		roles: [String]
	});

	userSchema.methods = {
		authenticate: function(passwordToMatch){
			return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
		}
	};

	var User = mongoose.model('User',userSchema);

	User.find({}).exec(function(err, collection){
		if(collection.length === 0){
			var salt, hash;
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'johdoe');
			User.create({firstName:'John', lastName: 'Doe', username: 'johdoe', salt:salt, hashed_pwd:hash, roles:['admin'] });
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'kevdan')
			User.create({firstName:'Kevin', lastName: 'Dane', username: 'kevdan', salt:salt, hashed_pwd:hash, roles:[]});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'davbro')
			User.create({firstName:'Dave', lastName: 'Brown', username: 'davbro', salt:salt, hashed_pwd:hash});
		}
	});
};