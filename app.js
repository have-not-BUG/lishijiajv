var express = require('express');
var compression = require('compression');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var search = require('./routes/search');
var single = require('./routes/single');
var weizhang = require('./routes/weizhang');
var contact = require('./routes/contact');
var feedback = require('./routes/feedback');
var about = require('./routes/about');
var underconstruction = require('./routes/underconstruction');
var sort = require('./routes/sort');
var hot = require('./routes/hot');
var sortsearch = require('./routes/sortsearch');

var app = express();
global.post=require('./data/mongoose');

// 设置keep-alive  2017.5.16
// var server = app.listen(5001);
// server.listen(3000);
// server.on('connection', function(socket) {
//     console.log("A new connection was made by a client.");
//     socket.setTimeout(30 * 1000);
//     // 30 second timeout. Change this as you see fit.
// })
//设置缓存

var options={
    // maxAge: 86400000
    maxAge: 0
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require("ejs").__express);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),options));
// app.use(express.static('public', options));

app.use('/', index);
app.use('/', search);
app.use('/', single);
app.use('/', weizhang);
app.use('/', contact);
app.use('/', feedback);
app.use('/', about);
app.use('/', underconstruction);
app.use('/', sort);
app.use('/', hot);
app.use('/', sortsearch);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
