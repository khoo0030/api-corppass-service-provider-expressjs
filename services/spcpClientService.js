const config = require('./../config/index')
const SPCPAuthClient = require('@opengovsg/spcp-auth-client')

module.exports = new SPCPAuthClient({
  partnerEntityId: config.env('PARTNER_ENTITY_ID', config.get('corpPass.partnerEntityId')),
  idpLoginURL: config.env('IDP_LOGIN_URL', config.get('corpPass.idpLoginURL')),
  idpEndpoint: config.env('IDP_ENDPOINT', config.get('corpPass.idpEndpoint')),
  esrvcID: config.env('ESRVC_ID', config.get('corpPass.esrvcID')),
  appCert: config.env('APP_CERT', config.get('corpPass.appCert')),
  appKey: config.env('APP_KEY', config.get('corpPass.appKey')),
  spcpCert: config.env('SPCP_CERT', config.get('corpPass.spcpCert')),
  extract: config.env('EXTRACT', config.get('corpPass.extract')),
})
