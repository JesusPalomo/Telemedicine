const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/patientportal', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'patientportal.html'));
});

module.exports = router;
