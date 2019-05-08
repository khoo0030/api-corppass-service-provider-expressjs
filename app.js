const cors = require('cors')
const express = require('express')
const httpStatus = require('http-status-codes')
const loggingService = require('./services/loggingService')
const routes = require('./routes')

const app = express()

app.use(cors())

app.use(function (req, res, next) {
  loggingService.debug(req.url)
  next()
})

app.use(routes)

app.use(function (req, res, next) {
  return next(res.status(httpStatus.NOT_FOUND).json('Route not found'));
});

app.use(function (err, req, res, next) {
  loggingService.error(err.stack);
  res.status(err.status || 500);
  return res.jsonp({
    status: err.status || 500,
    message: err.message,
  });
});

module.exports = app;
