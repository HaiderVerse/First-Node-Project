const express = require('express');
const { displayLoginForm,handleLogin } = require('../../controllers/auth/login');

const router = express.Router();
router.get('/', displayLoginForm);

router.post('/', handleLogin);

module.exports = router;