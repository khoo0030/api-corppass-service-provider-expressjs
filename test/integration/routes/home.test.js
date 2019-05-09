process.env.NODE_ENV = 'testing'

let server = require('./../../../bin/index')
const httpStatus = require('http-status-codes')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

const route = '/'

describe('health check route /', () => {
  it('should 200', function (done) {
    chai.request(server)
      .get(route)
      .end((err, res) => {
        expect(res.status).to.equal(httpStatus.OK)
        expect(res.body.data).to.equal('health check ok')
      })
    done()
  })
})
