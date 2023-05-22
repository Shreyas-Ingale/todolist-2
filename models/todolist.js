const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    dueDate: {
        type: Date,
        required: false
    }
});

const Todolist = mongoose.model('Todolist', todolistSchema);

module.exports = Todolist;