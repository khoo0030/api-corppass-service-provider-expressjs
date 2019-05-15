const expect = require('chai').expect
const httpStatus = require('http-status-codes')
const routeNotFoundMiddleware = require('../../../middleware/routeNotFoundMiddleware')

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

describe('route not found middleware test', function () {
  it('returns json response', function () {
    routeNotFoundMiddleware(req, res, next)
    expect(res.statusCode).to.equal(httpStatus.NOT_FOUND)
    expect(res.data).to.deep.equal({
      status: httpStatus.NOT_FOUND,
      message: 'Route not found',
    })
  })
})
