const { body } = require('express-validator');

const tweetCreateValidator = [
    body('user_id').notEmpty().withMessage('User Id must not be empty.'),
    body('user_id').isInt().withMessage('User Id must be an Integer.'),
    body('tweet').isString().withMessage('Tweet must be a string'),
    body('tweet').notEmpty().withMessage('Tweet cannot be empty'),
];

module.exports = {
    tweetCreateValidator
}