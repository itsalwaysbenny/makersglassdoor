const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('client-sessions');
const passport = require('passport');
 // routes
const index = require('./routes/index');
const users = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// to use static files such as images css, static assets
app.use(express.static(path.join(__dirname, 'public')));


// Register routes
app.use('/', index);
app.use('/users', users);
app.use('/auth', authRoutes);

//set up middleware for client session
// app.use(
//     session({
//         cookieName: 'session',
//         secret: 'password',
//         duration: 24 *60 * 60 *1000
//     })
// );
//using passport session instead of cookie session to check if i can pass /post route TESTS
app.use(session({
  secret: 'anything',
  resave: false,
  saveUninitialized: true
}))
//Passport is Express-compatible authentication middleware for Node.js.
app.use(passport.initialize());
app.use(passport.session());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
