var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongolb://localhost:27017/');

module.exports = {mongoose};