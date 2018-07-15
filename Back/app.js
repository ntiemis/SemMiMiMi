var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();
app.use(expressMongoDb('mongodb://localhost:17017/semmimimi'));
app.use(bodyParser.json());
app.use(cors());

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
