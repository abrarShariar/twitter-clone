const { body } = require('express-validator');

const tweetCreateValidator = [
    body('userId').notEmpty().withMessage('User Id must not be empty.'),
    body('userId').isInt().withMessage('User Id must be an Integer.'),
    body('tweet').isString().withMessage('Tweet must be a string'),
    body('tweet').notEmpty().withMessage('Tweet cannot be empty'),
];

module.exports = {
    tweetCreateValidator
}