## Table of Contents
- [api-corppass-service-provider-expressjs](#api-corppass-service-provider-expressjs)
- [Quick Start](#quick-start)
    - [Setting up Web Client](#setting-up-web-client)
    - [Setting up MockPass](#setting-up-mockpass)

## api-corppass-service-provider-expressjs
A sample node.js CorpPass Service Provider API

## Quick Start
This Service Provider is meant to work together with a
[web client](https://github.com/khoo0030/client-corppass-playplay-vuejs) and
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
Web client is running on http://localhost:7000

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
