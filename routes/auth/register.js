// ../../routes/auth/register.js
const express = require('express');
const { displaySignupForm, registerUser } = require('../../controllers/auth/register.js');

const router = express.Router();

router.get('/', displaySignupForm);
router.post('/', registerUser);

module.exports = router;
