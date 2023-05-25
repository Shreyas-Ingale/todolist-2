//Deafult schema for database Todolist
const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    duedate: {
        type: String,
        required: false
    }
});

const Todolist = mongoose.model('Todolist', todolistSchema);

module.exports = Todolist;