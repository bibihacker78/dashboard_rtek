const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); // Autoriser toutes les origines

// Importer le routeur principal depuis le dossier routes
const routes = require('./routes');

// Utiliser le routeur pour toutes les routes API
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
