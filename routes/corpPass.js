const express = require('express')
const router = express.Router()
const { login, assertSaml } = require('../controllers/corpPassController')

router.get('/corppass-login', login)
router.get('/assert-saml', assertSaml)

module.exports = router
