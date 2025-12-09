const pool = require("../../db");
const queries = require("./utenti_queries");

const getUtentiList = (req, res) => {
  pool.query(queries.getUtenti, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUtente = (req, res) => {
  /*Prendo i dati dell'utente dalla richiesta*/
  const {
    username,
    password,
    nome,
    cognome,
    email,
    citta,
    data_nascita,
    bio,
    ruolo,
  } = req.body;

  pool.query(queries.getUtenteByUsername, [username], (error, results) => {
    if (error) throw error;

    /*Se la query da qualche riga come risultato significa che lo username è gia nel database*/
    if (results.rows.length > 0) {
      res.status(400).send("Lo username è gia presente nel database");
    } else {
      /*Se non è già presente chiamo la query passando come parametri i dati della richiesta*/
      pool.query(
        queries.addUtente,
        [
          username,
          password,
          nome,
          cognome,
          email,
          citta,
          data_nascita,
          bio,
          ruolo,
        ],
        (error) => {
          if (error) throw error;
          res.status(201).send("Utente aggiunto correttamente al database");
        }
      );
    }
  });
};

const deleteUtente = (req, res) => {
  const { username } = req.body;

  pool.query(queries.deleteUtente, [username], (error, results) => {
    if (error) throw error;

    /*Se non ci sono righe significa che l'utente da eliminare non c'è*/
    if (results.rowCount === 0) {
      res.status(404).send("Utente non trovato");
    } else {
      res.status(200).send("Utente eliminato");
    }
  });
};

const getUtenteByUsername = (req, res) => {
  const username = req.params.username;
  pool.query(queries.getUtenteByUsernameQ, [username], (err, result) => {
    if (err) throw err;
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: "Utente non trovato" });
    }
  });
};

module.exports = {
  getUtentiList,
  addUtente,
  deleteUtente,
  getUtenteByUsername,
};
