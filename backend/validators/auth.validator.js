const { body } = require('express-validator');
const { check, oneOf, validationResult } = require('express-validator');
const registrationValidator = [
    body('email').normalizeEmail().isEmail().withMessage('Must be a valid email.'),
    body('username').isString().withMessage('Username must be string.'),
    body('username').notEmpty().withMessage('Username must not be empty.'),
    body('password').notEmpty().withMessage('Password must not be empty.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
    body('password').isString().withMessage('Password must be string.')
];

module.exports = {
    registrationValidator
}