const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();
const authRouter = require('./routes/auth');

const app = express();


// router.get('/test', (req, res) => {
//   res.send("Hello world");
// });

app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(process.env.PORT, () => {
  console.log("HELLO WORLD");
});


app.get('/', (req, res) => {
  res.send("Hello World");
})


module.exports = app;
