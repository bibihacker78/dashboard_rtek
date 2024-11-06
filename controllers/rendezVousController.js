const connection = require('../database');

exports.getRendezVousStatus = (req, res) => {
  const query = `
    SELECT 
      rendez_vouses.status,
      rendez_vouses.date,
      patients.nom AS patient_nom,
      ophtamologues.nom AS ophtamologue_nom
      
    FROM 
      rendez_vouses
    JOIN 
      patients ON rendez_vouses.id_patient = patients.id
    JOIN 
      ophtamologues ON rendez_vouses.id_ophtamologue = ophtamologues.id
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des rendez-vous :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(results);
    }
  });
};
