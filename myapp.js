const express = require('express')
const port = 3000

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// middleware 
app.use('/', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res) {
    // next(createError(404));
    res.status(404).render('error', {title: '404', status: 'Not Found', message: 'The resource requested could not be found on this server!'})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})