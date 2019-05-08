const express = require('express')
const httpStatus = require('http-status-codes')
const router = express.Router()

router.get('/', function (req, res) {
  return res.status(httpStatus.OK).json({data: 'health check ok'})
})

module.exports = router
