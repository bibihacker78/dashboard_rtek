const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Définir la route pour compter les patients
router.get('/count', patientController.getPatientCount);

module.exports = router;
