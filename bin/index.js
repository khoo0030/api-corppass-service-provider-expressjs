const cors = require('cors')
const config = require('./../config/index')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  return res.status(200).json({data: 'health check ok'})
})

const port = config.get('app.port', 7002)
app.listen(port, function (err) {
  if (err) console.error(err)
  console.log(`listening on port ${port}!`)
})
