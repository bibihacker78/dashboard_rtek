// database.js
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err.message);
    return;
  }
  console.log('Connexion réussie à la base de données MySQL');
});

module.exports = connection;
