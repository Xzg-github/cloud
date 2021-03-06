var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const routes = [
  '/product/epld',
  '/product/wms',
  '/case',
  '/case1',
  '/case2',
  '/case3',
  '/case4',
  '/case5',
  '/contact'
];

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  if (routes.includes(req.path)) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  } else {
    res.redirect(302, '/');
    //next(createError(404));
  }
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

const port = 8082;
const server = app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});

module.exports = app;
