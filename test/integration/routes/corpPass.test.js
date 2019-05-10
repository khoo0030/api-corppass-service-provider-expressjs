// process.env.NODE_ENV = 'testing'
//
// let server = require('./../../../bin')
// const httpStatus = require('http-status-codes')
// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const config = require('./../../../config/index')
// const expect = chai.expect
//
// chai.use(chaiHttp)
//
// describe('corppass routes', () => {
//   describe('/corppass-login', function () {
//     it('should 302', function (done) {
//       chai.request(server)
//       .get('/corppass-login')
//       .end((err, res) => {
//         expect(res.status).to.equal(httpStatus.MOVED_TEMPORARILY)
//         expect(res.redirects).to.equal(`
//         ${config.env('IDP_LOGIN_URL', config.get('corpPass.idpLoginURL'))}?
//         RequestBinding=HTTPArtifact&
//         ResponseBinding=HTTPArtifact&
//         PartnerId=${config.env('PARTNER_ENTITY_ID', config.get('corpPass.partnerEntityId'))}&
//         Target=${config.env('TARGET_URL', config.get('corpPass.targetURL'))}&
//         NameIdFormat=Email&
//         esrvcID=${config.env('ESRVC_ID', config.get('corpPass.esrvcID'))}`)
//       })
//       done()
//     })
//   });
//
//   describe('/assert-saml', () => {
//     it('should 302', function (done) {
//       const SAMLart = 'AAQAAFDAXYQm%2BWRGiqG7dPVRA3qTT3OZZlMIEpTRZn5zgTwF9%2FkLB0WXM9Q%3D'
//       const RelayState = config.env('TARGET_URL', config.get('corpPass.targetURL'))
//
//       chai.request(server)
//       .get(`/assert-saml?SAMLart=${SAMLart}&RelayState=${RelayState}`)
//       .end((err, res) => {
//         expect(res.status).to.equal(httpStatus.MOVED_TEMPORARILY)
//       })
//       done()
//     })
//   })
// })
