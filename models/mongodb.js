var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/glab');
exports.mongoose = mongoose;