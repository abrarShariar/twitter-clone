const express = require('express');
const router = express.Router();
const { registrationValidator } = require('../validators/auth.validator');
const { validationResult } = require('express-validator');
const DBManager = require('../db/dbmanager');

router.post('/register',[ registrationValidator ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        // save the user data into db
        try {
            DBManager().createUser(req.body);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ errors: error });
        }
        
});

module.exports = router;