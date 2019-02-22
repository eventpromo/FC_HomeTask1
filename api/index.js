const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config.js');
const passport = require('./middlewares/passport');
const apiRouter = require('./routes/api');
const rootRouter = require('./routes/root');

const app = express();

mongoose.connect(`${config.mongo_url}${config.mongo_db}`, { useNewUrlParser: true });

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api', apiRouter);
app.use(rootRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  next(createError(500, err.message));
});

module.exports = app;
