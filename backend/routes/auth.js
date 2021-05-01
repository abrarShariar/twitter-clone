const express = require('express');
const router = express.Router();
const { registrationValidator } = require('../validators/auth.validator');
const { oneOf, check, validationResult, body } = require('express-validator');

router.post('/register',[ registrationValidator ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        
        

});

module.exports = router;