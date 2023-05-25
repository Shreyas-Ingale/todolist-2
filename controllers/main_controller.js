// accessing the database
const db = require('../config/mongoose');
const Todolist = require('../models/todolist');
// main controller action for redering home page
module.exports.main = function (req, res) {
    Todolist.find({}).then(function (todolist) {
        return res.render('main', {
            title: "TodoList - A basic and simple Todo List App",
            todolist: todolist,
            taskNumber: todolist.length,
        });
    }).catch(function (error) {
        if (error) {
            console.log('Error in fetching tasks from db', error);
            return;
        }
    });
}

// controller action for creating new tasks
module.exports.create = function (req, res) {
    let cat = '', duedate = 'No Deadline';
    if(req.body.category !== 'Choose a Category'){
        cat = req.body.category;
    }
    if(req.body.duedate != ''){
        duedate = req.body.duedate;
    }
    Todolist.create({
        description: req.body.description,
        category: cat,
        duedate: duedate
    }).then(function () {
        return res.redirect('back');
    }).catch(function (error) {
        if (error) {
            console.log('error in creating task', error);
            return;
        }
    });
}

// controller action for deleting selected tasks
module.exports.delete = function (req, res) {
    let id = req.query;
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        Todolist.findByIdAndDelete(Object.keys(id)[i]).catch(function (err) {
            if (err) {
                console.log('error in deleting task');
            }
        });
    }
    return res.redirect('back');
}