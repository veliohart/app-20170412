/**
* Module dependencies.
*/
const passport                  = require('passport');
const LocalStrategy             = require('passport-local').Strategy;
const JwtStrategy               = require('passport-jwt').Strategy; // авторизация через JWT
const ExtractJwt                = require('passport-jwt').ExtractJwt; // авторизация через JWT
const crypto                    = require('crypto');
const User                      = require('../models/').user;
const jwt                       = require('jsonwebtoken');
const socketioJwt               = require('socketio-jwt');
const jwtsecret                 = 'secretkey';


/**
* LocalStrategy
*/
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: true
},
function(username, password, done) {
  console.log('username', username);
  console.log('password', password);
  User.findOne({email: username})
    .then(function(user) {
      if (!user || !user.checkPassword(password)) {
        return done(null, false, {
          message: 'Нет такого пользователя или пароль неверен.'
        });
      }
      return done(null, user);
    })
    .catch(function(err) {
      return done(err);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.displayName);
});

passport.deserializeUser(function(id, done) {
  User.findOne({email: id}, function (err, user) {
    done(err, user);
  });
});

/*
 *  JWT Strategy
 */
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: jwtsecret
};

passport.use('JWT', new JwtStrategy(jwtOptions, function(payload, done) {
  console.log('done auth', done);
  User.findById(payload.id)
    .then(function(user) {
      user ? done(null, user) : done(null, false);
    })
    .catch(function(err) {
      return done(err);
    });
}));
