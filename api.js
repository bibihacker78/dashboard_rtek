const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000; // Choisis un port pour ton serveur

// Configuration de la base de données
const db = mysql.createConnection({
    host: '192.168.252.244',
    user: 'dev',
    password: 'dev',
    database: 'rtech_api2'
});

// Connexion à la base de données
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// Route API pour récupérer le nombre d'inscriptions par mois
app.get('/inscriptions-par-mois', (req, res) => {
    const query = `SELECT MONTH(created_at) as month, COUNT(*) as count
        FROM patients 
        GROUP BY month`;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la requête : ' + err.stack);
            return res.status(500).json({ error: 'Erreur lors de la requête' });
        }

        // Afficher les résultats dans la console
        console.log('Résultats de la requête :', results);

        // Répondre avec les résultats au client
        res.json(results);
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
