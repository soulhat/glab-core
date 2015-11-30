var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // yay!
});
var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'sssss22222' });
kitty.save(function (err) {
    if (err) // ...
        console.log('meow');
});