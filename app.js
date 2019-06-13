const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const routes = require('./routes')
const loggingService = require('./services/loggingService');
const routeNotFoundMiddleware = require('./middleware/routeNotFoundMiddleware')
const internalServerErrorMiddleware = require('./middleware/internalServerErrorMiddleware')

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('combined', { stream: loggingService.stream }));
app.use(routes)
app.use(routeNotFoundMiddleware)
app.use(internalServerErrorMiddleware)

module.exports = app
