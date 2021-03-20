var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var emailRouter = require('./routes/emailRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Multer for Images//
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});


/////////////////////////////////////

const adminData = require('./routes/admin');
let filesRouter = require('./routes/files'); //import route to files.js


const MONGODB_URI = 'mongodb+srv://dataUser:kq45ZAyhYNc9VlLk@cluster0.wum7a.mongodb.net/quiltingCottage?retryWrites=true&w=majority//';
const PORT = process.env.PORT || 3000;

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// app.use(cors());
app.use((req, res, next) => {
  // * = any, can be set to specific domains
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use('/users', usersRouter);
app.use('/admin', adminData);
app.use('/email',emailRouter);
app.use('/files', filesRouter); //Use route to files.js

app.use(multer({storage: fileStorage}).array('images'));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

mongoose.connect(MONGODB_URI)
    .then(result => {
        app.listen(PORT);
        console.log("Listening on port " + PORT);
    })
    .catch(err => {
        console.log(err);
    });


module.exports = app;
