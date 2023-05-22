const express = require('express');
const router = express.Router();
const controller = require('../controllers/main_controller');
console.log('Router Loaded Succesfully');
router.get('/', controller.main);
module.exports = router;

