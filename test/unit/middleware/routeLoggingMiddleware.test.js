const chai = require('chai')
const routeLoggingMiddleware = require('../../../middleware/routeLoggingMiddleware')
const loggingService = require('../../../services/loggingService')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.should()
chai.use(sinonChai)

let req = {url: 'http://localhost:7000'}
let res = {}
let next = function () {}

describe('route logging middleware test', function () {
  it('can log', function () {
    let spy = sinon.spy(loggingService, 'info')
    routeLoggingMiddleware(req, res, next)
    spy.should.have.been.calledOnce
    spy.should.have.been.calledWith(req.url)
  })
})
