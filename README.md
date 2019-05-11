## Table of Contents
- [api-corppass-service-provider-expressjs](#api-corppass-service-provider-expressjs)
- [Quick Start](#quick-start)
    - [Setting up Web Client](#setting-up-web-client)
    - [Setting up MockPass](#setting-up-mockpass)
    - [Setting up this project CorpPass Service Provider](#setting-up-this-project-corppass-service-provider)
- [How to use](#how-to-use)
- [Sequence Diagram](#sequence-diagram)
- [Project Specifications](#project-specifications)
    - [Environment variables](#environment-variables)
    - [Attributes](#attributes)
    - [XML document](#xml-document)
- [Acknowledgements](#acknowledgements)

## api-corppass-service-provider-expressjs
A sample node.js CorpPass Service Provider API

## Quick Start
This Service Provider is meant to work together with a
[Web Client](https://github.com/khoo0030/client-corppass-playplay-vuejs) and
[MockPass](https://github.com/opengovsg/mockpass).

### Setting up Web Client
```
git clone https://github.com/khoo0030/client-corppass-playplay-vuejs.git
```
```
cd client-corppass-playplay-vuejs
```
```
npm install
```
```
npm run serve
```
Web Client is running on http://localhost:7000

### Setting up MockPass
```
git clone https://github.com/opengovsg/mockpass.git
```
```
cd mockpass
```
```
npm install
```
Setup node environments. On Windows machine terminal, run these commands: 
```
export CORPPASS_ASSERT_ENDPOINT=http://localhost:7002/assert-saml
export MOCKPASS_PORT=5156
export MOCKPASS_NRIC=S8979373D
export MOCKPASS_UEN=123456789A
export SHOW_LOGIN_PAGE=true
export SIGN_ASSERTION=true
export ENCRYPT_ASSERTION=true
export SIGN_RESPONSE=true
export RESOLVE_ARTIFACT_REQUEST_SIGNED=true
```
```
node index.js
```
MockPass is running on http://localhost:5156

### Setting up this project CorpPass Service Provider
```
git clone https://github.com/khoo0030/api-corppass-service-provider-expressjs.git
```
```
cd api-corppass-service-provider-expressjs
```
```
npm install
```
```
npm run start
```
CorpPass Service Provider is running on http://localhost:7002

## How to use

- Go to [Web Client](https://github.com/khoo0030/client-corppass-playplay-vuejs). Landing page should load.
- @Web Client landing page - click on `Go to MockPass` button. MockPass login page should load.
- @MockPass login page - click on the `Login` button then click on `select username` and click on `[Object object]` selection. Home page should load indicating that MockPass authentication is successful.

## Sequence Diagram
![Sequence diagram](https://s3-ap-southeast-1.amazonaws.com/khoo0030-storage/github/api-corppass-service-provider-expressjs/sequence-diagram-v1.png)

## Project Specifications

### Environment variables

Node | config.js | What is it?
------------ | ------------- | -------------
PARTNER_ENTITY_ID | partnerEntityId | CorpPass SAML assert url for soap. Use NULL
IDP_LOGIN_URL | idpLoginURL | CorpPass login url. For MockPass: http://localhost:5156/corppass/logininitial
IDP_ENDPOINT | idpEndpoint | CorpPass SAML assert url: For MockPass: http://localhost:5156/corppass/soap
ESRVC_ID | esrvcID | CorpPass E-Service ID: For MockPass: use anything you like
APP_CERT | appCert | Service Provider generated certificate. For MockPass: use `\static\certs\server.crt` in MockPass repository 
APP_KEY | appKey | Service Provider private key. For MockPass: use `\static\certs\key.pem` in MockPass repository
SPCP_CERT | spcpCert | For MockPass: use `\static\certs\spcp.crt` in MockPass repository
EXTRACT | extract | Custom function to extract attributes. Can be empty
TARGET_URL | targetURL | Web Client url to redirect to after SAML assertion. Use http://localhost:7000/home

### Attributes
An attributes object with key value is returned after SAML assertion. Key is the UEN and value is base64 encoded payload of the XML document
```
{
    "123456789A": "PFVzZXJJbm..."
}
```

### XML document
Sample of the XML document, refer to Section 4.4.3 of the CorpPass Interface Specification v1.5
```
<UserInfo>
  <CPUID>S8979373D</CPUID>
  <CPEntID>123456789A</CPEntID>
</UserInfo>
<AuthAccess>
  <Result_Set>
    <ESrvc_Row_Count>1</ESrvc_Row_Count>
    <ESrvc_Result>
      <CPESrvcID>SPCP-TEST</CPESrvcID>
      <Auth_Result_Set>
        <Row_Count>1</Row_Count>
        <Row>
          <CPEntID_SUB>NULL</CPEntID_SUB>
          <CPRole>NULL</CPRole>
          <StartDate>2018-08-13</StartDate>
          <EndDate>9999-12-31</EndDate>
        </Row>
      </Auth_Result_Set>
    </ESrvc_Result>
  </Result_Set>
</AuthAccess>
```

## Acknowledgements
Special thanks to the folks at GovTech for creating [@opengovsg/spcp-auth-client](https://www.npmjs.com/package/@opengovsg/spcp-auth-client)
