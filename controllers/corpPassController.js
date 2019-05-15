const _ = require('lodash')
const attributeUtil = require('./../util/attributeUtil')
const config = require('./../config/index')
const loggingService = require('./../services/loggingService')
const spcpClientService = require('./../services/spcpClientService')

module.exports = {
  login: function (req, res) {
    const targetURL = config.env('TARGET_URL', config.get('corpPass.targetURL'))
    const esrvcID = config.env('ESRVC_ID', config.get('corpPass.esrvcID'))
    const redirectURL = spcpClientService.createRedirectURL(targetURL, esrvcID)
    res.redirect(redirectURL)
  },
  assertSaml: function (req, res) {
    const { SAMLart: samlArt, RelayState: relayState } = req.query

    spcpClientService.getAttributes(samlArt, relayState, (err, data) => {
      const { attributes, relayState } = data

      if (err) {
        loggingService.error(err.stack)
      } else {
        // OK. No errors resolving saml assertion.
        // MockPass returns a base64 encoded attributes object. Use the helpful attributeUtil to get the userInfo object
        // and authAccess object. Refer to test case to see what the 2 objects look like.
        const userInfo = attributeUtil.getUserInfo(attributes)
        // const authAccess = attributeUtil.getAuthAccess(attributes)

        // You can do whatever you want with the userInfo and authAccess

        // Then redirect back to back and return any data as cookie
        res.cookie('CPUID', _.get(userInfo, 'UserInfo.CPUID._text'))
        res.cookie('CPEntID', _.get(userInfo, 'UserInfo.CPEntID._text'))
      }

      res.redirect(relayState)
    })
  },
}
