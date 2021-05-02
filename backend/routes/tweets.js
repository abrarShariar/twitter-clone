const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { tweetCreateValidator } = require('../validators/tweet.validator.js');
const DBManager = require('../db/dbmanager');

/**
 * @api {post} /api/tweets
 * @apiDescription Create a new tweet
 * @apiName create-tweets
 * @apiVersion 1.0.0
 * @apiParam (RequestBody) {String} username The username of the user who tweeted
 * @apiParam (RequestBody) {String} tweet The tweet 
 */
router.post('/', [ tweetCreateValidator ], 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        try {
            const { username, tweet } = req.body;
            const user = await DBManager().getUserByKey('username', username);
            const isTweetCreated = await DBManager().createTweet({ userId: user['id'], tweet });
            return isTweetCreated 
                    ? res.status(200).json({ username, tweet, "message": "Successfully created new Tweet" }) 
                    : res.status(500).json({ message: "Failed to create new tweet!" }); 
        } catch (error) {
            return res.status(500).json({ errors: error });
        }
});

/**
 * @api {get} /api/tweets
 * @apiDescription Get all tweets
 * @apiName get-all-tweets
 * @apiVersion 1.0.0
 * @apiParam (RequestQuery) {Number} limit The number of tweets to limit when returning
 * @apiParam (RequestBody) {Number} offset The number of tweets to offset when returning
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