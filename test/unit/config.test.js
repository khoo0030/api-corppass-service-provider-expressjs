const config = require('./../../config/index')
const expect = require('chai').expect

describe('config', function () {
  describe('config.get()', function () {
    it('can get value', function () {
      const value = config.get('app.port', 0)
      expect(value).to.equal(7002)
    })
  })

  describe('config.has()', function () {
    it('returns true if key exists', function () {
      const value = config.has('app.port')
      expect(value).to.be.true
    })
  })

  describe('config.env()', function () {
    it('can get environment value', function () {
      process.env.TEST_ENV = 8080
      const value = config.env('TEST_ENV', 0)
      expect(value).to.be.equal('8080')
    })
  })
})
