const express = require('express')
const app = express()

app.get('/', function (req, res) {
  return res.status(200).json({data: 'health check ok'})
})

const port = 7002
app.listen(port, function (err) {
  if (err) console.error(err)
  console.log(`listening on port ${port}!`)
})
