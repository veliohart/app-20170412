const User            = require('../models/').user;
const utils           = require('../services/utils');
const jwt             = require('jsonwebtoken');
const jwtsecret       = 'secretkey';

function registerUser(req, res) {
  let username = req.body['username'];
  let password = req.body['password'];

  console.log('username', username, 'password', password);
  User.findOne({email: username})
  .then(function (user) {
    if(user) {
      res.status(422)
      .send("Username is already taken");
    } else {
      let user = new User();
      user.displayName = username;
      user.email = username;
      user.password = password;
      user.save()
      .then(function (koo) {
        console.log('koo', koo);
        res.status(201).send({displayName: username});
      })
      .catch(function(err) {
        console.log('!ERR', err);
      });
    }
  });
}

function login(req, res) {
    const user = req.user;
    const payload = {
        id: user.id,
        displayName: user.displayName,
        email: user.email
    };
    const token = jwt.sign(payload, jwtsecret); //здесь создается JWT

    res.send({user: user.displayName, token: 'JWT ' + token});
}

function auth(req, res) {
    if (req.user) {
        res.send("hello " + req.user.displayName);
    } else {
        res.send("No such user");
        console.log("err", err);
    }
}

module.exports = {
  auth: auth,
  registerUser: registerUser,
  login: login
};