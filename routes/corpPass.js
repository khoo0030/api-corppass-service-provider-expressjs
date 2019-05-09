const config = require('./../config/index')
const { stringify } = require('flatted')
const express = require('express')
const loggingService = require('./../services/loggingService')
const router = express.Router()
const spcpClientService = require('./../services/spcpClientService')

router.get('/corppass-login', function (req, res) {
  const targetURL = config.env('TARGET_URL', config.get('corpPass.targetURL'))
  const esrvcID = config.env('ESRVC_ID', config.get('corpPass.esrvcID'))
  const redirectURL = spcpClientService.createRedirectURL(targetURL, esrvcID)
  res.redirect(redirectURL)
})

router.get('/assert-saml', (req, res) => {
  const { SAMLart: samlArt, RelayState: relayState } = req.query

  spcpClientService.getAttributes(samlArt, relayState, (err, data) => {
    const { attributes, relayState } = data

    if (err) {
      loggingService.error(stringify(err))
    } else {

      res.cookie('GERALD_KHOO_COOKIE', attributes)
    }
    res.redirect(relayState)
  })
})

module.exports = router
