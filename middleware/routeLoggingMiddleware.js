const loggingService = require('../services/loggingService')

module.exports = function (req, res, next) {
  loggingService.info(req.url)
  next()
}
