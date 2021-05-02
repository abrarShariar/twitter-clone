const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { tweetCreateValidator } = require('../validators/tweet.validator.js');
const DBManager = require('../db/dbmanager');

/**
 * Create a new tweet
 */
router.post('/', [ tweetCreateValidator ], 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        try {
            const { userId, tweet } = req.body;
            const isTweetCreated = await DBManager().createTweet({ userId, tweet });
            return isTweetCreated 
                    ? res.status(200).json({ userId, tweet, "message": "Successfully created new Tweet" }) 
                    : res.status(500).json({ message: "Failed to create new tweet!" }); 
        } catch (error) {
            return res.status(500).json({ errors: error });
        }
});

/**
 * Get all tweets with offset and limit
 */
router.get('/', async (req, res) => {
    try {
        const { limit = 100, offset = 0 } = req.query;
        const tweetsList = await DBManager().getTweets(limit, offset);
        return res.status(200).json({ tweetsList });
    } catch (error) {
        return res.status(500).json({ errors: error });
    }
});

module.exports = router;