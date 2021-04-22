const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/appointment', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'appointment.html'));
});

module.exports = router;
