const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { tweetCreateValidator } = require('../validators/tweet.validator.js');
const DBManager = require('../db/dbmanager');

/**
 * Create a new tweet
 */
router.post('/', [ tweetCreateValidator ], 
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        try {
            console.log("Here");
        } catch (error) {
            console.log(error);
            return res.status(500).json({ errors: error });
        }
});

module.exports = router;