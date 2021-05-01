const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Users GET");
});

router.post('/', (req, res) => {
    return res.send("Route post");
});

module.exports = router;