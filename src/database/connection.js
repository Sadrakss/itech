const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sadrak:08808008@cluster0.xs5xq.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`connected mongodb!`)
});

module.exports = db;