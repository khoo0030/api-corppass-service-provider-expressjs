const httpStatus = require('http-status-codes')

// eslint-disable-next-line no-unused-vars
module.exports = function (req, res, next) {
  res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    message: 'Route not found',
  })
}
