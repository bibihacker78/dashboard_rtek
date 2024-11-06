const express = require('express');
const router = express.Router();
const rendezVousController = require('../controllers/rendezVousController');

// Définir la route pour les statuts des rendez-vous
router.get('/statut', rendezVousController.getRendezVousStatus);

module.exports = router;
