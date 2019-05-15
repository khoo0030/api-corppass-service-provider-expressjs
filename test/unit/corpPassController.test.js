const config = require('../../config/index')
const corpPassController = require('./../../controllers/corpPassController')
const expect = require('chai').expect

const IDP_LOGIN_URL = config.env('IDP_LOGIN_URL', config.get('corpPass.idpLoginURL'))
const PARTNER_ID = config.env('PARTNER_ENTITY_ID', config.get('corpPass.partnerEntityId'))
const TARGET = config.env('TARGET_URL', config.get('corpPass.targetURL'))
const ESRVC_ID = config.env('ESRVC_ID', config.get('corpPass.esrvcID'))

let req = {
  body: {},
};

let res = {
  redirectUrl: '',
  redirect: function (redirectUrl) {
    this.redirectUrl = redirectUrl
    return this
  },
};

describe('corppass controller', function () {
  describe('login function test', function () {
    it('returns corppass login url', function () {
      const response = corpPassController.login(req, res)
      expect(response.redirectUrl).to.equal(
      `${IDP_LOGIN_URL}?RequestBinding=HTTPArtifact&ResponseBinding=HTTPArtifact&PartnerId=${PARTNER_ID}&Target=${TARGET}&NameIdFormat=Email&esrvcID=${ESRVC_ID}`,
      )
    });
  });
})
