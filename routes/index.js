const express = require('express');
const router = express.Router();

// Importer les routes spécifiques
const ophtamologueRoutes = require('./ophtamologueRoutes');
const patientRoutes = require('./patientRoutes');
const rendezVousRoutes = require('./rendezVousRoutes');

// Utiliser les routes, avec des préfixes si nécessaire
router.use('/ophtamologue', ophtamologueRoutes);
router.use('/patients', patientRoutes);
router.use('/rendez-vous', rendezVousRoutes);

module.exports = router;
