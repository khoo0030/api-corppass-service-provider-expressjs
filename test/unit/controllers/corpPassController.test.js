const config = require('../../../config')
const corpPassController = require('../../../controllers/corpPassController')
const expect = require('chai').expect

const IDP_LOGIN_URL = config.env('IDP_LOGIN_URL', config.get('corpPass.idpLoginURL'))
const PARTNER_ID = config.env('PARTNER_ENTITY_ID', config.get('corpPass.partnerEntityId'))
const TARGET = config.env('TARGET_URL', config.get('corpPass.targetURL'))
const ESRVC_ID = config.env('ESRVC_ID', config.get('corpPass.esrvcID'))

let req = {}

let res = {
  redirectUrl: undefined,
  redirect: function (redirectUrl) {
    this.redirectUrl = redirectUrl
    return this
  },
}

describe('corppass controller test', function () {
  describe('login function test', function () {
    it('returns corppass login url', function () {
      corpPassController.login(req, res)
      expect(res.redirectUrl).to.equal(
        `${IDP_LOGIN_URL}?RequestBinding=HTTPArtifact&ResponseBinding=HTTPArtifact&PartnerId=${PARTNER_ID}&Target=${TARGET}&NameIdFormat=Email&esrvcID=${ESRVC_ID}`,
      )
    })
  })
})
