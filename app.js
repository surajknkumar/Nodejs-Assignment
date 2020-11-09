/**
 * @format
 * @author Suraj Kumar
 * @email surajknkumar@gmail.com
 * @Owner Interview
 */

var express = require('express');
var indexRouter = require('./routes/controller/index.controller');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/', indexRouter);

let server = app.listen(8000, function () {
  console.log(
    'Server listening at http://' +
      server.address().address +
      ':' +
      server.address().port
  );
});

module.exports = app;
