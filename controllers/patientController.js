const connection = require('../database');

exports.getPatientCount = (req, res) => {
  const query = 'SELECT COUNT(id) AS totalUsers FROM `patients`';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération du nombre de patients :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(results[0]);
    }
  });
};
