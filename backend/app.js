const createError = require('http-errors');
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const tweetRouter = require('./routes/tweets');

const app = express();

app.use(cors());
// set up middlewares
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
// set up custom routes
app.use('/api/auth', authRouter);
app.use('/api/tweets', tweetRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(process.env.PORT, () => {
  console.log(`Node server running on ${process.env.PORT}`);
});

module.exports = app;
