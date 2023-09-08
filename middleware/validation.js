const { check } = require('express-validator');

exports.signupValidation = [
    check('email', 'Invalid email address').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 8 or more characters').isLength({ min: 8 })
]

exports.loginValidation = [
    check('email', 'Invalid email address').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password is required').isLength({ min: 8 })
]