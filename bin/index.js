const app = require('./../app')
const config = require('./../config/index')
const http = require('http')
const loggingService = require('./../services/loggingService')

const message = {
  data: 'heelo',
  field: [
    'aaa',
    'bbb'
  ]
}

loggingService.error('Error', message)
loggingService.error(message)

const NODE_ENV = config.env('NODE_ENV', config.get('app.env', 'development'))
let PORT

NODE_ENV === 'testing' ? PORT = 7999 : PORT = config.get('app.port', 7002)

const server = http.createServer(app)
server.listen(PORT)

server.on('listening', function () {
  loggingService.info(`Listening on Port: ${PORT}`)
})

server.on('error', function (err) {
  loggingService.error(err.stack)
  process.exit(1)
})

process.once('SIGTERM', function () {
  loggingService.info('SIGTERM received. Terminating')
  server.close(function () {
    process.exit(0)
  })
})

process.on('uncaughtException', function (err) {
  loggingService.error(err.stack)
})

process.on('unhandledRejection', function (err) {
  loggingService.error(err.stack)
})

module.exports = server
