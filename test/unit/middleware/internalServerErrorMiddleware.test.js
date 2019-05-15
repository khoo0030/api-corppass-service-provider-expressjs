const chai = require('chai')
const expect = require('chai').expect
const httpStatus = require('http-status-codes')
const internalServerErrorMiddleware = require('../../../middleware/internalServerErrorMiddleware')
const loggingService = require('../../../services/loggingService')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.should()
chai.use(sinonChai)

let err = {
  message: 'error',
  stack: {},
}
let req = {}
let res = {
  statusCode: undefined,
  data: undefined,
  status: function (statusCode) {
    this.statusCode = statusCode
    return this
  },
  json: function (data) {
    this.data = data
    return this
  }
}
let next = function () {}

describe('internal server error middleware test', function () {
  it('can log', function () {
    let spy = sinon.spy(loggingService, 'error')
    internalServerErrorMiddleware(err, req, res, next)
    spy.should.have.been.calledOnce
    spy.should.have.been.calledWith(err.stack)
  })

  it('returns json response', function () {
    internalServerErrorMiddleware(err, req, res, next)
    expect(res.statusCode).to.equal(httpStatus.INTERNAL_SERVER_ERROR)
    expect(res.data).to.deep.equal({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message,
    })
  })
})
