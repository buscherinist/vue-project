//per far partire il server nodejs
//da dentro la cartella backend eseguire il comando: node index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // user di default su XAMPP è 'root'
  password: '',         // di default password vuota su XAMPP
  database: 'vuejs'       // nome del database che hai creato
});

connection.connect(err => {
  if (err) {
    console.error('Errore di connessione al DB:', err);
    return;
  }
  console.log('Connesso a MySQL');
});

app.post('/register', (req, res) => {
  const { nome, cognome, email, password } = req.body;
  if (!nome || !cognome || !email || !password) {
    return res.status(400).json({ message: 'Tutti i campi sono obbligatori' });
  }

  const query = 'INSERT INTO users (nome, cognome, email, password) VALUES (?, ?, ?, ?)';

  connection.query(query, [nome, cognome, email, password], (err, results) => {
    if (err) {
      console.error('Errore inserimento:', err);
      return res.status(500).json({ message: 'Errore nel server' });
    }
    res.json({ message: 'Utente registrato con successo' });
  });
});

app.listen(port, () => {
  console.log(`Server backend in ascolto su http://localhost:${port}`);
});
