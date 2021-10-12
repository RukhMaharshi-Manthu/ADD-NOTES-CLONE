//const { response } = require('express')

const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

// Register User
router.post('/register', userCtrl.registerUser)
// Login User
router.post('/login', userCtrl.loginUser)

// verify Token
router.get('/verify', userCtrl.verifiedToken)


module.exports = router