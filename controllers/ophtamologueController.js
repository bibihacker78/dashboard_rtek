const connection = require('../database');

exports.getOphtamologueByMonth = (req, res) => {
    const query = `
    SELECT MONTH(created_at) AS month, COUNT(*) AS count 
    FROM ophtamologues 
    GROUP BY MONTH(created_at)
    ORDER BY month ASC
  `;
  connection.query(query,  (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données :', err.message);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(results);
    }
  });

};

exports.getOphtamologueCount = (req, res) => {
    const query = 'SELECT COUNT(nom) AS total FROM `ophtamologues`';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération du nombre d\'ophtalmologues :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      } else {
        res.json(results[0]);
      }
    });
  };