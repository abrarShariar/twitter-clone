const express = require('express');
const router = express.Router();
const { registrationValidator } = require('../validators/auth.validator');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const DBManager = require('../db/dbmanager');

router.post('/register',[ registrationValidator ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        try {
            const { email, username, password } = req.body;
            const hashedPassword = bcrypt.hashSync(password, saltRounds);
            DBManager().createUser({ email, username, hashedPassword });
            return res.status(200).json({ 'message': 'Successfully created a User.'})
        } catch (error) {
            console.log(error);
            return res.status(500).json({ errors: error });
        }
});

router.post('/login', 
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
                        res.status(200).json({ 'message': `Found User with username: ${username}` }) :
                        res.status(404).json({ 'message': 'User not found!' });
        } catch (errors) {
            console.log(errors);
            return res.status(500).json({ errors });
        }
    }
)

module.exports = router;