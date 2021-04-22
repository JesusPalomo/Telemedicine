const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/updateform', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'updateform.html'));
});

module.exports = router;
