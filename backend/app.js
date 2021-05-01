const createError = require('http-errors');
const express = require('express');
require('dotenv').config();

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const tweetRouter = require('./routes/tweets');
const DBManager = require('./db/dbmanager');

const app = express();
// set up middlewares
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// set up custom routes
app.use('/api/auth', authRouter);
app.use('/api/tweet', tweetRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(process.env.PORT, () => {
  console.log(`Node server running on ${process.env.PORT}`);
});

module.exports = app;
