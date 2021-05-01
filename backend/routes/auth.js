const express = require('express');
const router = express.Router();

router.get('register', (req, res) => {
    console.log("Register here")
    return res.send("Here To register")
});

module.exports = router;