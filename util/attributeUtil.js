const _ = require('lodash')
const base64 = require('base-64')
const convert = require('xml-js')
const dom = require('xmldom').DOMParser
const xpath = require('xpath')

module.exports = {
  getUen: function (attributes) {
    return _.keys(attributes)[0]
  },

  getRawAttributes: function (attributes) {
    const uen = this.getUen(attributes)
    return base64.decode(attributes[uen])
  },

  getUserInfo: function (attributes) {
    const doc = new dom().parseFromString(this.getRawAttributes(attributes))
    const userInfoNode = xpath.select('//UserInfo', doc)[0].toString()
    return convert.xml2js(userInfoNode, {compact: true})
  },
}
