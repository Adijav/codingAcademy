 var path = require('path');
 var rootPath = path.normalize(__dirname+'/../../');

 module.exports = {
 	development: {
 		db: 'mongodb://Adijav:1234567890@ds031845.mlab.com:31845/coding_academy',
 		rootPath: rootPath,
 		port: process.env.PORT || 3000
 	},
 	production: {
 		db:'',
 		rootPath: rootPath,
 		port: process.env.PORT || 5000
 	}

 };