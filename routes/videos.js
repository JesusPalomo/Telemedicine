const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/videos', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'videos.html'));
});

module.exports = router;
