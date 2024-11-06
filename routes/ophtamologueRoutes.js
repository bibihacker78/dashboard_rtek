const express = require('express');
const router = express.Router();

const ophtamologueController = require('../controllers/ophtamologueController');

// definition des route pour ophtmologues
router.get('/', ophtamologueController.getOphtamologueByMonth);
router.get('/count', ophtamologueController.getOphtamologueCount);

module.exports = router;
