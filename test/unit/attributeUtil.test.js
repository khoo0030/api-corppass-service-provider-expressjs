const attributeUtil = require('./../../util/attributeUtil')
const expect = require('chai').expect

const attributes = {
  "123456789A": "PFVzZXJJbmZvPg0KICA8Q1BVSUQ+Uzg5NzkzNzNEPC9DUFVJRD4NCiAgPENQRW50SUQ+MTIzNDU2Nzg5QTwvQ1BFbnRJRD4NCjw" +
  "vVXNlckluZm8+DQo8QXV0aEFjY2Vzcz4NCiAgPFJlc3VsdF9TZXQ+DQogICAgPEVTcnZjX1Jvd19Db3VudD4xPC9FU3J2Y19Sb3dfQ291bnQ+DQog" +
  "ICAgPEVTcnZjX1Jlc3VsdD4NCiAgICAgIDxDUEVTcnZjSUQ+U1BDUC1URVNUPC9DUEVTcnZjSUQ+DQogICAgICA8QXV0aF9SZXN1bHRfU2V0Pg0KI" +
  "CAgICAgICA8Um93X0NvdW50PjE8L1Jvd19Db3VudD4NCiAgICAgICAgPFJvdz4NCiAgICAgICAgICA8Q1BFbnRJRF9TVUI+TlVMTDwvQ1BFbnRJRF" +
  "9TVUI+DQogICAgICAgICAgPENQUm9sZT5OVUxMPC9DUFJvbGU+DQogICAgICAgICAgPFN0YXJ0RGF0ZT4yMDE4LTA4LTEzPC9TdGFydERhdGU+DQo" +
  "gICAgICAgICAgPEVuZERhdGU+OTk5OS0xMi0zMTwvRW5kRGF0ZT4NCiAgICAgICAgPC9Sb3c+DQogICAgICA8L0F1dGhfUmVzdWx0X1NldD4NCiAg" +
  "ICA8L0VTcnZjX1Jlc3VsdD4NCiAgPC9SZXN1bHRfU2V0Pg0KPC9BdXRoQWNjZXNzPg0K"
}

const rawAttributes =
'<UserInfo>\n' +
'  <CPUID>S8979373D</CPUID>\n' +
'  <CPEntID>123456789A</CPEntID>\n' +
'</UserInfo>\n' +
'<AuthAccess>\n' +
'  <Result_Set>\n' +
'    <ESrvc_Row_Count>1</ESrvc_Row_Count>\n' +
'    <ESrvc_Result>\n' +
'      <CPESrvcID>SPCP-TEST</CPESrvcID>\n' +
'      <Auth_Result_Set>\n' +
'        <Row_Count>1</Row_Count>\n' +
'        <Row>\n' +
'          <CPEntID_SUB>NULL</CPEntID_SUB>\n' +
'          <CPRole>NULL</CPRole>\n' +
'          <StartDate>2018-08-13</StartDate>\n' +
'          <EndDate>9999-12-31</EndDate>\n' +
'        </Row>\n' +
'      </Auth_Result_Set>\n' +
'    </ESrvc_Result>\n' +
'  </Result_Set>\n' +
'</AuthAccess>\n'

const expectedUserInfo = {
  UserInfo: {
    CPUID: {
      _text: 'S8979373D'
    },
    CPEntID: {
      _text: '123456789A'
    }
  }
}

const expectedAuthAccess = {
  AuthAccess: {
    Result_Set: {
      ESrvc_Result: {
        Auth_Result_Set: {
          Row: {
            CPEntID_SUB: {
              _text: "NULL"
            },
            CPRole: {
              _text: "NULL"
            },
            EndDate: {
              _text: "9999-12-31"
            },
            StartDate: {
              _text: "2018-08-13"
            }
          },
          Row_Count: {
            _text: "1"
          }
        },
        CPESrvcID: {
          _text: "SPCP-TEST"
        }
      },
      ESrvc_Row_Count: {
        _text: "1"
      }
    }
  }
}

function trimWhiteSpacesAndNewLines(str) {
  return str.replace(/\s/g, "");
}

describe('attribute util', function () {
  describe('attributeUtil.getUen()', function () {
    it('should return uen when attributes object is passed in', function () {
      const uen = attributeUtil.getUen(attributes)
      expect(uen).to.equal('123456789A')
    });
  });

  describe('attributeUtil.getRawAttributes()', function () {
    it('should return xml string when attributes object is passed in', function () {
      const result = attributeUtil.getRawAttributes(attributes)
      expect(trimWhiteSpacesAndNewLines(result)).to.equal(trimWhiteSpacesAndNewLines(rawAttributes))
    });
  });

  describe('attributeUtil.getUserInfo()', function () {
    it('should return user info object when attributes object is passed in', function () {
      const userInfo = attributeUtil.getUserInfo(attributes)
      expect(userInfo).to.deep.equal(expectedUserInfo)
    });
  });

  describe('attributeUtil.getAuthAccess()', function () {
    it('should return auth access object when attributes object is passed in', function () {
      const accessAccess = attributeUtil.getAuthAccess(attributes)
      expect(accessAccess).to.deep.equal(expectedAuthAccess)
    });
  });
});
