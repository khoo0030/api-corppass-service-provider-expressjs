const config = require('./../config/index')
const app = require('./../app')

const port = config.get('app.port', 7002)

app.listen(port, function (err) {
  if (err) console.error(err)
  console.log(`listening on port ${port}!`)
})
