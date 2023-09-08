const express = require('express');
const router = express.Router();

const guestController = require('../controller/GuestController');
const { signupValidation } = require('../middleware/validation');

// router.post('/login', guestController.login);
router.post('/register', signupValidation, guestController.register);
// router.get('/profile', authMiddleware.authenticate, userController.profile);

module.exports = router;