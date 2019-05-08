const cors = require('cors')
const config = require('./../config/index')
const express = require('express')
const httpStatus = require('http-status-codes')
const loggingService = require('./../services/loggingService')
const app = express()

app.use(cors())
app.use(function (req, res, next) {
  loggingService.debug(req.url)
  next()
})

app.get('/', function (req, res) {
  return res.status(httpStatus.OK).json({data: 'health check ok'})
})

const port = config.get('app.port', 7002)
app.listen(port, function (err) {
  if (err) console.error(err)
  console.log(`listening on port ${port}!`)
})
