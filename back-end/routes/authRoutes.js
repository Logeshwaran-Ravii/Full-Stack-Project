const express = require('express')
const { registerUser, userLogin } = require('../controller/authController')
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(userLogin)

module.exports = router