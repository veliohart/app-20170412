'use strict';

// built-in
const path            = require('path');
// external
const bodyParser      = require('body-parser');
const compress        = require('compression');
const cookieParser    = require('cookie-parser');
const express         = require('express');
const helmet          = require('helmet');
const mongoose        = require('mongoose');
const passport        = require('passport');
const auth            = require('./app/services/auth');
const favicon         = require('serve-favicon');
// local
require('./app/models'); // this MUST be done before controllers
const config =          require('./config');
const controllers =     require('./app/controllers');
const routes =          require('./app/routes');
const logger =          require('./app/helpers/logger');

// EXPRESS SET-UP
// create app
const app = express();

// use jade and set views and static directories
app.set('view engine', 'ejs');
app.set('views', path.join(config.root, 'app/views'));
app.use(express.static(path.join(config.root, 'static')));

//add middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(compress());
app.use(cookieParser());
app.use(favicon(path.join(config.root, 'static/img/favicon.png')));
app.use(helmet());

//
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// set all routes
app.use('/api', routes.api);
app.use('/user', routes.user);
app.use('/', routes.base);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// general errors
app.use((err, req, res, next) => {
  const sc = err.status || 500;
  res.status(sc);
  res.render('error', {
    status: sc,
    message: err.message,
    stack: config.env === 'development' ? err.stack : ''
  });
});

// MONGOOSE SET-UP
// warn if MONGOURI is being used and pass is undefined
if (config.db === process.env.MONGOURI && !config.pass)
  logger.warn(`bad credientials for ${config.db} -- check env.`);
mongoose.connect(config.db, {
  user: config.user,
  pass: config.pass
});
mongoose.Promise = require('bluebird');
mongoose.set('debug', true);

const db = mongoose.connection;
db.on('error', () => {
  throw new Error(`unable to connect to database at ${config.db}`);
});

// START AND STOP
const server = app.listen(config.port, () => {
  logger.info(`listening on port ${config.port}`);
});
process.on('SIGINT', () => {
  logger.info('shutting down!');
  db.close();
  server.close();
  process.exit();
});
