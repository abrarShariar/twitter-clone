const express = require('express');
const router = express.Router();
const { registrationValidator, loginValidator } = require('../validators/auth.validator');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const DBManager = require('../db/dbmanager');

/**
 * Register a new user
 */
router.post('/register', [ registrationValidator ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        try {
            const { username, password } = req.body;
            const hashedPassword = bcrypt.hashSync(password, saltRounds);
            DBManager().createUser({ username, hashedPassword });
            return res.status(200).json({ 'message': `Successfully created a new user with username: @${username}`})
        } catch (error) {
            console.log(error);
            return res.status(500).json({ errors: error });
        }
});

/**
 * Login a user
 */
router.post('/login', [ loginValidator ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        try {
            const { username, password } = req.body;
            const user = await DBManager().getUserByUsername(username);
            const isPasswordMatch = bcrypt.compareSync(password, user.password);
            return user['username'] && isPasswordMatch ?
                        res.status(200).json({ 'message': `Successfully logging in user with username: ${username}!` }) :
                        res.status(404).json({ 'message': 'User not found!' });
        } catch (errors) {
            console.log(errors);
            return res.status(500).json({ errors });
        }
    }
)

module.exports = router;