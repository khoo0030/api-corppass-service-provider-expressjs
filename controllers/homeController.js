const httpStatus = require('http-status-codes')

module.exports = {
  index: function (req, res) {
    return res.status(httpStatus.OK).json({data: 'health check ok'})
  }
}
