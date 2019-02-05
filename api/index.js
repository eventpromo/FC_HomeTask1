const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const config = require('./config/config.js');

const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: config.cors,
  credentials: true,
}));
app.use(session({
  store: new RedisStore({
      url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Welcome');
});
app.use('/api', apiRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  next(createError(500, err.message));
});

module.exports = app;
