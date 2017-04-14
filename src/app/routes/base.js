'use strict';
// this controller is meant to set up routes from all other controllers
// it also sets up basic express routes

const express = require('express');

//load controllers
const viewController = require('../controllers/index').view;

// create router
const router = express.Router();

// set basic routes
router.get('/', viewController.index);

// export router
module.exports = router;
