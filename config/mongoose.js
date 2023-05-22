const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/todolist');
const db = mongoose.connection;
db.on = ('error', console.error.bind(console, "Error occured while connecting to MongoDB"));
db.once('open', function() {
    console.log('Connected to MongoDB Successfully');
})

module.exports = db;