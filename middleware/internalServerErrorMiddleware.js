const httpStatus = require('http-status-codes')
const loggingService = require('../services/loggingService')

// eslint-disable-next-line no-unused-vars
module.exports = function (err, req, res, next) {
  loggingService.error(err.stack)
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR)
  return res.json({
    status: err.status || httpStatus.INTERNAL_SERVER_ERROR,
    message: err.message,
  })
}
