const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const routeLoggingMiddleware = require('./middleware/routeLoggingMiddleware')
const routeNotFoundMiddleware = require('./middleware/routeNotFoundMiddleware')
const internalServerErrorMiddleware = require('./middleware/internalServerErrorMiddleware')

const app = express()

app.use(cors())
app.use(routeLoggingMiddleware)
app.use(routes)
app.use(routeNotFoundMiddleware)
app.use(internalServerErrorMiddleware)

module.exports = app
