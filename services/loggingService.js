const config = require('./../config/index')
const path = require('path')
const winston = require('winston')

const NODE_ENV = config.env('NODE_ENV', config.get('app.env', 'development'))
const LOGGING_LEVEL = config.env('LOGGING_LEVEL', config.get('app.logging.level', NODE_ENV === 'production' ? 'debug' : 'info'))

const format = winston.format

const loggingService = winston.createLogger({
  level: LOGGING_LEVEL,
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp(),
  ),
  transports: [
    new winston.transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(info => `${info.level}: ${info.timestamp} [${info.label}] ${info.message}`),
      )
    }),
    new winston.transports.File({
      filename: path.resolve(process.cwd(), 'logs', 'winston.log'),
      format: format.combine(
        format.metadata({fillExcept: ['level', 'label', 'timestamp', 'message']}),
        format.json()
      )
    })
  ],
  exitOnError: false
})

module.exports = loggingService
