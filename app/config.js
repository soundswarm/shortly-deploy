var port = require('../server.js')
// var path = require('path');
var mongoose = require('mongoose');

var mongoUrl = 'mongo ds036638.mongolab.com:36638/MongoLab-r -u sean -p t'//process.env.CUSTOMCONNSTR_MONGOLAB_URI ||'mongodb://127.0.0.1:27017/shortlydb';

mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db error.connection error:'));
db.once('open', function (callback) {
  console.log('opened db');
});


module.exports = db;

