const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const router = require('./routers/index');

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
};
const app = express();

app.use(logger('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(cookieParser());

app.use('/api', router);

app.use((req, res, next) => {
  const error = createError(
    404,
    'Запрашиваемой страницы не существует на сервере.',
  );
  next(error);
});

app.use((err, req, res, next) => {
  const appMode = req.app.get('env');
  let error;

  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  res.locals.message = err.message;
  res.locals.error = error;
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
