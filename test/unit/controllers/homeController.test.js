const expect = require('chai').expect
const homeController = require('../../../controllers/homeController')
const httpStatus = require('http-status-codes')

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
  },
}

describe('home controller test', function () {
  it('returns response', function () {
    homeController.index(req, res)
    expect(res.statusCode).to.equal(httpStatus.OK)
    expect(res.data).to.deep.equal({ data: 'health check ok' })
  })
})
