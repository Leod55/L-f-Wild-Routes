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

  pool.query(queries.getUtenteByUsernameQ, [username], (error, results) => {
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
          res
            .status(201)
            .json({ message: "Utente aggiunto correttamente al database" });
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

const aggiornaPassword = (req, res) => {
  const { username, vecchiaPassword, nuovaPassword } = req.body;

  pool.query(queries.getUtenteByUsernameQ, [username], (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({
          success: false,
          message: "Errore interno del server (Recupero utente)",
        });
    }

    if (results.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Utente non trovato" });
    }

    const user = results.rows[0];

    // 2. Controllo se la "Vecchia Password" inserita dall'utente è corretta
    if (user.password !== vecchiaPassword) {
      return res
        .status(401)
        .json({
          success: false,
          message: "La vecchia password non è corretta.",
        });
    }

    // 3. Controllo se la nuova password è uguale a quella attuale (Il tuo requisito)
    if (user.password === nuovaPassword) {
      return res
        .status(400)
        .json({
          success: false,
          message: "La nuova password non può essere uguale a quella vecchia.",
        });
    }

    // 4. Procedi con l'update solo se i controlli passano
    pool.query(
      queries.aggiornaPassword,
      [nuovaPassword, username],
      (err, updateResult) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({
              success: false,
              message: "Errore interno del server (Update)",
            });
        }
        // Risposta positiva JSON
        res
          .status(200)
          .json({ success: true, message: "Password aggiornata con successo" });
      }
    );
  });
};

const utenteEsistente = (req, res) => {
  const username  = req.params.username;

  pool.query(queries.utenteEsistente, [username], (err, res) => {
    if (err) throw err;

    if (res.rows.length > 0) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  });
};

module.exports = {
  getUtentiList,
  addUtente,
  deleteUtente,
  getUtenteByUsername,
  aggiornaPassword,
  utenteEsistente
};
