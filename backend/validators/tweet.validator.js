const { body } = require('express-validator');

const tweetCreateValidator = [
    body('username').notEmpty().withMessage('Username must not be empty.'),
    body('username').isString().withMessage('Username must be an Integer.'),
    body('tweet').isString().withMessage('Tweet must be a string'),
    body('tweet').notEmpty().withMessage('Tweet cannot be empty'),
];

module.exports = {
    tweetCreateValidator
}