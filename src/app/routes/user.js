const express         = require('express');
const passport        = require('passport');
const UserController  = require('../controllers/').user;
const auth            = require('../services/auth');
const validate        = require('../helpers/validator');

const router = express.Router();

router.post('/registration', validate.validateParams, UserController.registerUser);

router.post('/login', validate.validateParams, passport.authenticate('local'), UserController.login);

router.get('/auth', validate.validateParams, passport.authenticate('JWT'), UserController.auth);


module.exports = router;
