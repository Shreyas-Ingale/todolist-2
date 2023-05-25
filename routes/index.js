// import express and router 
const express = require('express');
const router = express.Router();
// access the controller
const controller = require('../controllers/main_controller');
console.log('Router Loaded Succesfully');
// route the requests to the specific controller actions
router.get('/', controller.main);
router.post('/create-task', controller.create);
router.get('/delete-task', controller.delete);

module.exports = router;

