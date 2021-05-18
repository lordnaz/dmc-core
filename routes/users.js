var express = require('express');

// model 
const User = require('../models/user');

// controller
const userController = require('../controllers/userController');

var router = express.Router();

// register user 
router.post('/register', userController.addUser);

// retrieve all user 
router.get('/retrieve', userController.getAllUser);

// retrieve user by id 
router.get('/retrieve/:id', userController.getUserByID);

module.exports = router;
