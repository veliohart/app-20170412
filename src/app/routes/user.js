const express         = require('express');
const passport        = require('passport');
const UserController  = require('../controllers/').user;
const auth            = require('../services/auth');

const router = express.Router();

router.post('/registration', UserController.registerUser);

router.post('/login', passport.authenticate('local'), UserController.login);

router.get('/auth', passport.authenticate('JWT'), UserController.auth);


module.exports = router;
