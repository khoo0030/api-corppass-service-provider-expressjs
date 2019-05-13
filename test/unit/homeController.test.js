const expect = require('chai').expect
const homeController = require('./../../controllers/homeController')
const httpStatus = require('http-status-codes')

let req = {
  body: {},
};

let res = {
  statusCode: '',
  jsonObject: {},

  status: function (statusCode) {
    this.statusCode = statusCode
    return this
  },
  json: function (jsonObject) {
    this.jsonObject = jsonObject
    return this
  },
};

describe('home controller', function () {
  it('returns response', function () {
    const response = homeController.index(req, res)
    expect(response.statusCode).to.equal(httpStatus.OK)
    expect(response.jsonObject).to.deep.equal({ data: 'health check ok' })
  });
})
